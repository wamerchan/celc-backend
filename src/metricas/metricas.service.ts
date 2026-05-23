import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MetricasService {
  constructor(private databaseService: DatabaseService) {}

  async getTotalActiveLines() {
    const total = await this.databaseService.linea.count({
      where: { estado: 'Activa' }
    });
    return {
      total,
      label: 'Líneas Activas',
    };
  }

  async getEquipmentsInRepair() {
    const total = await this.databaseService.equipo.count({
      where: { estado: 'En_Mantenimiento' }
    });
    return {
      total,
      label: 'Equipos en Reparación',
    };
  }

  async getUpcomingReviews() {
    const total = await this.databaseService.revision.count({
      where: {
        realizadaPorUsuario: null
      }
    });
    return {
      total,
      label: 'Revisiones Próximas',
    };
  }

  async getDashboardStats() {
    const [
      totalEquipos,
      equiposDisponibles,
      equiposAsignados,
      equiposEnMantenimiento,
      totalLineas,
      lineasActivas,
      totalAsignaciones,
      revisionesProximas,
      eqStates,
      lOp,
      eqBrands,
      revisions,
    ] = await Promise.all([
      this.databaseService.equipo.count(),
      this.databaseService.equipo.count({ where: { estado: 'Disponible' } }),
      this.databaseService.equipo.count({ where: { estado: 'Asignado' } }),
      this.databaseService.equipo.count({ where: { estado: 'En_Mantenimiento' } }),
      this.databaseService.linea.count(),
      this.databaseService.linea.count({ where: { estado: 'Activa' } }),
      this.databaseService.asignacion.count({ where: { fechaDesasignacion: null } }),
      this.databaseService.revision.count({ where: { realizadaPorUsuario: null } }),
      this.databaseService.equipo.groupBy({
        by: ['estado'],
        _count: { estado: true }
      }),
      this.databaseService.linea.groupBy({
        by: ['operador'],
        _count: { operador: true }
      }),
      this.databaseService.equipo.groupBy({
        by: ['marca'],
        _count: { marca: true },
        orderBy: {
          _count: { marca: 'desc' }
        },
        take: 5
      }),
      this.databaseService.revision.findMany({
        select: { fechaProgramada: true }
      }),
    ]);

    // Mapear agrupaciones
    const equiposPorEstado = eqStates.map(item => ({
      estado: item.estado || 'Desconocido',
      count: item._count.estado
    }));

    const lineasPorOperador = lOp.map(item => ({
      operador: item.operador || 'Desconocido',
      count: item._count.operador
    }));

    const topMarcas = eqBrands.map(item => ({
      marca: item.marca || 'Desconocido',
      count: item._count.marca
    }));

    // Agrupar revisiones por mes (formato Ene, Feb... o AAAA-MM)
    const mesesNombres = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const monthCounts: Record<string, { order: string; label: string; count: number }> = {};

    revisions.forEach(r => {
      if (r.fechaProgramada) {
        const date = new Date(r.fechaProgramada);
        const year = date.getFullYear();
        const monthIndex = date.getMonth();
        const orderKey = `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
        const label = `${mesesNombres[monthIndex]} ${year}`;

        if (!monthCounts[orderKey]) {
          monthCounts[orderKey] = { order: orderKey, label, count: 0 };
        }
        monthCounts[orderKey].count += 1;
      }
    });

    const revisionesPorMes = Object.values(monthCounts)
      .sort((a, b) => a.order.localeCompare(b.order))
      .map(item => ({
        mes: item.label,
        count: item.count
      }));

    return {
      totalEquipos,
      equiposDisponibles,
      equiposAsignados,
      equiposEnMantenimiento,
      totalLineas,
      lineasActivas,
      totalAsignaciones,
      revisionesProximas,
      equiposPorEstado,
      lineasPorOperador,
      revisionesPorMes,
      topMarcas,
    };
  }
}
