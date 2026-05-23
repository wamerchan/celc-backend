import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReportesService {
  constructor(private databaseService: DatabaseService) {}

  async getLineasReport(filters: any) {
    const where: any = {};
    if (filters.estado) {
      where.estado = filters.estado;
    }
    if (filters.fecha_desde) {
      where.fechaActivacion = { ...where.fechaActivacion, gte: new Date(filters.fecha_desde) };
    }
    if (filters.fecha_hasta) {
      where.fechaActivacion = { ...where.fechaActivacion, lte: new Date(filters.fecha_hasta) };
    }
    return this.databaseService.linea.findMany({ where });
  }

  async getEquiposReport(filters: any) {
    const where: any = {};
    if (filters.estado) {
      where.estado = filters.estado;
    }
    if (filters.fecha_desde) {
      where.fechaAdquisicion = { ...where.fechaAdquisicion, gte: new Date(filters.fecha_desde) };
    }
    if (filters.fecha_hasta) {
      where.fechaAdquisicion = { ...where.fechaAdquisicion, lte: new Date(filters.fecha_hasta) };
    }
    return this.databaseService.equipo.findMany({ where });
  }

  async getAsignacionesReport(filters: any) {
    const where: any = {};
    if (filters.id_usuario) {
      where.usuarioId = Number(filters.id_usuario);
    }
    if (filters.id_equipo) {
      where.equipoId = Number(filters.id_equipo);
    }
    if (filters.id_linea) {
      where.lineaId = Number(filters.id_linea);
    }
    if (filters.fecha_desde) {
      where.fechaAsignacion = { ...where.fechaAsignacion, gte: new Date(filters.fecha_desde) };
    }
    if (filters.fecha_hasta) {
      where.fechaAsignacion = { ...where.fechaAsignacion, lte: new Date(filters.fecha_hasta) };
    }
    return this.databaseService.asignacion.findMany({ where });
  }
}