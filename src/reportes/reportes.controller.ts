import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiBearerAuth } from '@nestjs/swagger';
import { ReportesService } from './reportes.service';
import { JwtGuard } from '../auth/jwt.guard';
import { ReportFiltersDto, ReportResponseDto } from './reportes.dto';

@ApiTags('reportes')
@ApiBearerAuth('JWT-auth')
@Controller('api/reportes')
@UseGuards(JwtGuard)
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  @Get('lineas')
  @ApiOperation({ summary: 'Obtener reporte de líneas de producción' })
  @ApiQuery({ type: ReportFiltersDto })
  @ApiResponse({ status: 200, description: 'Reporte de líneas generado exitosamente', type: ReportResponseDto })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async getLineasReport(@Query() query: ReportFiltersDto): Promise<any[]> {
    return this.reportesService.getLineasReport(query);
  }

  @Get('equipos')
  @ApiOperation({ summary: 'Obtener reporte de equipos' })
  @ApiQuery({ type: ReportFiltersDto })
  @ApiResponse({ status: 200, description: 'Reporte de equipos generado exitosamente', type: ReportResponseDto })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async getEquiposReport(@Query() query: ReportFiltersDto): Promise<any[]> {
    return this.reportesService.getEquiposReport(query);
  }

  @Get('asignaciones')
  @ApiOperation({ summary: 'Obtener reporte de asignaciones' })
  @ApiQuery({ type: ReportFiltersDto })
  @ApiResponse({ status: 200, description: 'Reporte de asignaciones generado exitosamente', type: ReportResponseDto })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async getAsignacionesReport(@Query() query: ReportFiltersDto): Promise<any[]> {
    return this.reportesService.getAsignacionesReport(query);
  }
}