import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class MetricasService {
  constructor(private databaseService: DatabaseService) {}

  // Servicio para obtener métricas del dashboard - 23 de octubre de 2025 - WM Developer

  async getTotalActiveLines() {
    const sql = `
      SELECT COUNT(*) as total
      FROM Lineas
      WHERE estado = 'Activa'
    `;
    const result: any = await this.databaseService.query(sql);
    return {
      total: result[0]?.total || 0,
      label: 'Líneas Activas',
    };
  }

  async getEquipmentsInRepair() {
    const sql = `
      SELECT COUNT(*) as total
      FROM Equipos
      WHERE estado = 'En Reparación'
    `;
    const result: any = await this.databaseService.query(sql);
    return {
      total: result[0]?.total || 0,
      label: 'Equipos en Reparación',
    };
  }

  async getUpcomingReviews() {
    const sql = `
      SELECT COUNT(*) as total
      FROM Revisiones
      WHERE fecha_programada > NOW()
      AND realizada_por_usuario IS NULL
    `;
    const result: any = await this.databaseService.query(sql);
    return {
      total: result[0]?.total || 0,
      label: 'Revisiones Próximas',
    };
  }

  async getDashboardStats() {
    // Obtiene todas las métricas del dashboard - 23 de octubre de 2025 - WM Developer
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
