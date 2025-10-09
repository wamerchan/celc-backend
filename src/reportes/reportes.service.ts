import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ReportesService {
  constructor(private databaseService: DatabaseService) {}

  async getLineasReport(filters: any) {
    let sql = 'SELECT * FROM Lineas WHERE 1=1';
    const params: any[] = [];
    if (filters.estado) {
      sql += ' AND estado = ?';
      params.push(filters.estado);
    }
    if (filters.fecha_desde) {
      sql += ' AND fecha_creacion >= ?';
      params.push(filters.fecha_desde);
    }
    if (filters.fecha_hasta) {
      sql += ' AND fecha_creacion <= ?';
      params.push(filters.fecha_hasta);
    }
    return this.databaseService.query(sql, params);
  }

  async getEquiposReport(filters: any) {
    let sql = 'SELECT * FROM Equipos WHERE 1=1';
    const params: any[] = [];
    if (filters.estado) {
      sql += ' AND estado = ?';
      params.push(filters.estado);
    }
    if (filters.fecha_desde) {
      sql += ' AND fecha_adquisicion >= ?';
      params.push(filters.fecha_desde);
    }
    if (filters.fecha_hasta) {
      sql += ' AND fecha_adquisicion <= ?';
      params.push(filters.fecha_hasta);
    }
    return this.databaseService.query(sql, params);
  }

  async getAsignacionesReport(filters: any) {
    let sql = 'SELECT * FROM Asignaciones WHERE 1=1';
    const params: any[] = [];
    if (filters.id_usuario) {
      sql += ' AND id_usuario = ?';
      params.push(filters.id_usuario);
    }
    if (filters.id_equipo) {
      sql += ' AND id_equipo = ?';
      params.push(filters.id_equipo);
    }
    if (filters.id_linea) {
      sql += ' AND id_linea = ?';
      params.push(filters.id_linea);
    }
    if (filters.fecha_desde) {
      sql += ' AND fecha_asignacion >= ?';
      params.push(filters.fecha_desde);
    }
    if (filters.fecha_hasta) {
      sql += ' AND fecha_asignacion <= ?';
      params.push(filters.fecha_hasta);
    }
    return this.databaseService.query(sql, params);
  }
}