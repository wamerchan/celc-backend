import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { MetricasService } from './metricas.service';
import { JwtGuard } from '../auth/jwt.guard';

@ApiTags('metricas')
@ApiBearerAuth('JWT-auth')
@Controller('api/metricas')
@UseGuards(JwtGuard)
export class MetricasController {
  constructor(private readonly metricasService: MetricasService) {}

  // Controlador para gestionar las métricas del dashboard - 23 de octubre de 2025 - WM Developer

  @Get('lineas-activas')
  @ApiOperation({ summary: 'Obtener cantidad de líneas activas' })
  @ApiResponse({ status: 200, description: 'Cantidad de líneas activas' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async getTotalActiveLines(): Promise<any> {
    return await this.metricasService.getTotalActiveLines();
  }

  @Get('equipos-reparacion')
  @ApiOperation({ summary: 'Obtener cantidad de equipos en reparación' })
  @ApiResponse({ status: 200, description: 'Cantidad de equipos en reparación' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async getEquipmentsInRepair(): Promise<any> {
    return await this.metricasService.getEquipmentsInRepair();
  }

  @Get('revisiones-proximas')
  @ApiOperation({ summary: 'Obtener cantidad de revisiones próximas' })
  @ApiResponse({ status: 200, description: 'Cantidad de revisiones próximas' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async getUpcomingReviews(): Promise<any> {
    return await this.metricasService.getUpcomingReviews();
  }

  @Get('dashboard')
  @ApiOperation({ summary: 'Obtener todas las métricas del dashboard' })
  @ApiResponse({ status: 200, description: 'Todas las métricas del dashboard' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async getDashboardStats(): Promise<any> {
    return await this.metricasService.getDashboardStats();
  }
}
