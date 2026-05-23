import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReportesService {
  constructor(private databaseService: DatabaseService) {}

  async getLineasReport(filters: any) {
    const where: any = {};
    const dateDesde = filters.startDate ?? filters.fecha_desde;
    const dateHasta = filters.endDate ?? filters.fecha_hasta;
    if (filters.estado) {
      where.estado = filters.estado;
    }
    if (dateDesde) {
      where.fechaActivacion = { ...where.fechaActivacion, gte: new Date(dateDesde) };
    }
    if (dateHasta) {
      where.fechaActivacion = { ...where.fechaActivacion, lte: new Date(dateHasta) };
    }
    return this.databaseService.linea.findMany({
      where,
      include: {
        asignaciones: {
          where: { fechaDesasignacion: null },
          include: { usuario: true }
        }
      }
    });
  }

  async getEquiposReport(filters: any) {
    const where: any = {};
    const dateDesde = filters.startDate ?? filters.fecha_desde;
    const dateHasta = filters.endDate ?? filters.fecha_hasta;
    if (filters.estado) {
      where.estado = filters.estado;
    }
    if (dateDesde) {
      where.fechaAdquisicion = { ...where.fechaAdquisicion, gte: new Date(dateDesde) };
    }
    if (dateHasta) {
      where.fechaAdquisicion = { ...where.fechaAdquisicion, lte: new Date(dateHasta) };
    }
    return this.databaseService.equipo.findMany({
      where,
      include: {
        revisiones: {
          orderBy: { fechaProgramada: 'desc' }
        }
      }
    });
  }

  async getAsignacionesReport(filters: any) {
    const where: any = {};
    const dateDesde = filters.startDate ?? filters.fecha_desde;
    const dateHasta = filters.endDate ?? filters.fecha_hasta;
    if (filters.id_usuario) {
      where.usuarioId = Number(filters.id_usuario);
    }
    if (filters.id_equipo) {
      where.equipoId = Number(filters.id_equipo);
    }
    if (filters.id_linea) {
      where.lineaId = Number(filters.id_linea);
    }
    if (dateDesde) {
      where.fechaAsignacion = { ...where.fechaAsignacion, gte: new Date(dateDesde) };
    }
    if (dateHasta) {
      where.fechaAsignacion = { ...where.fechaAsignacion, lte: new Date(dateHasta) };
    }
    return this.databaseService.asignacion.findMany({
      where,
      include: {
        usuario: true,
        equipo: true,
        linea: true
      }
    });
  }
}