import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ReportesService } from './reportes.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('api/reportes')
@UseGuards(JwtGuard)
export class ReportesController {
  constructor(private readonly reportesService: ReportesService) {}

  @Get('lineas')
  async getLineasReport(@Query() query: any) {
    return this.reportesService.getLineasReport(query);
  }

  @Get('equipos')
  async getEquiposReport(@Query() query: any) {
    return this.reportesService.getEquiposReport(query);
  }

  @Get('asignaciones')
  async getAsignacionesReport(@Query() query: any) {
    return this.reportesService.getAsignacionesReport(query);
  }
}