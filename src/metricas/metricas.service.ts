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
    // "En Reparación" isn't in EquiposEstado, map it to En_Mantenimiento
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
        fechaProgramada: { gt: new Date() },
        realizadaPorUsuario: null
      }
    });
    return {
      total,
      label: 'Revisiones Próximas',
    };
  }

  async getDashboardStats() {
    const [activeLines, equipmentsInRepair, upcomingReviews] = await Promise.all([
      this.getTotalActiveLines(),
      this.getEquipmentsInRepair(),
      this.getUpcomingReviews(),
    ]);

    return {
      activeLines,
      equipmentsInRepair,
      upcomingReviews,
    };
  }
}
