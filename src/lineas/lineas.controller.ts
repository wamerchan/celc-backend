import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { LineasService } from './lineas.service';
import { JwtGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role.guard';
import { CreateLineaDto, UpdateLineaDto, LineaResponseDto } from './lineas.dto';

@ApiTags('lineas')
@ApiBearerAuth('JWT-auth')
@Controller('api/lineas')
@UseGuards(JwtGuard)
export class LineasController {
  constructor(private readonly lineasService: LineasService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las líneas celulares' })
  @ApiResponse({ status: 200, description: 'Lista de líneas', type: [LineaResponseDto] })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async findAll(): Promise<LineaResponseDto[]> {
    const lineas = await this.lineasService.findAll();
    return lineas.map(linea => ({
      ...linea,
      planDatos: linea.planDatos ?? undefined,
      estado: linea.estado ?? undefined,
      descripcion: linea.descripcion ?? undefined,
      fechaActivacion: linea.fechaActivacion ?? undefined,
      fechaVencimientoPlan: linea.fechaVencimientoPlan ?? undefined
    }));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una línea por ID' })
  @ApiParam({ name: 'id', description: 'ID de la línea', example: 1 })
  @ApiResponse({ status: 200, description: 'Línea encontrada', type: LineaResponseDto })
  @ApiResponse({ status: 404, description: 'Línea no encontrada' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async findById(@Param('id') id: string): Promise<LineaResponseDto | null> {
    const linea = await this.lineasService.findById(+id);
    if (!linea) return null;
    return {
      ...linea,
      planDatos: linea.planDatos ?? undefined,
      estado: linea.estado ?? undefined,
      descripcion: linea.descripcion ?? undefined,
      fechaActivacion: linea.fechaActivacion ?? undefined,
      fechaVencimientoPlan: linea.fechaVencimientoPlan ?? undefined
    };
  }

  @Post()
  @UseGuards(new RoleGuard([1, 2])) // Admin o Técnico
  @ApiOperation({ summary: 'Crear una nueva línea celular' })
  @ApiResponse({ status: 201, description: 'Línea creada exitosamente', type: LineaResponseDto })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async create(@Body() body: CreateLineaDto): Promise<any> {
    return this.lineasService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una línea celular' })
  @ApiParam({ name: 'id', description: 'ID de la línea a actualizar', example: 1 })
  @ApiResponse({ status: 200, description: 'Línea actualizada', type: LineaResponseDto })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Línea no encontrada' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async update(@Param('id') id: string, @Body() body: UpdateLineaDto): Promise<any> {
    return this.lineasService.update(+id, body);
  }

  @Delete(':id')
  @UseGuards(new RoleGuard([1, 2]))
  @ApiOperation({ summary: 'Eliminar una línea celular' })
  @ApiParam({ name: 'id', description: 'ID de la línea a eliminar', example: 1 })
  @ApiResponse({ status: 200, description: 'Línea eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Línea no encontrada' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async delete(@Param('id') id: string): Promise<any> {
    return this.lineasService.delete(+id);
  }

  @Put(':id/toggle')
  @UseGuards(new RoleGuard([1, 2]))
  @ApiOperation({ summary: 'Cambiar estado de una línea (Activa/Inactiva/Suspendida)' })
  @ApiParam({ name: 'id', description: 'ID de la línea a cambiar', example: 1 })
  @ApiResponse({
    status: 200,
    description: 'Estado de la línea actualizado',
    type: LineaResponseDto,
  })
  @ApiResponse({ status: 404, description: 'Línea no encontrada' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async toggleStatus(@Param('id') id: string): Promise<any> {
    const linea = await this.lineasService.toggleStatus(+id);
    if (!linea) return null;
    return {
      ...linea,
      planDatos: linea.planDatos ?? undefined,
      estado: linea.estado ?? undefined,
      descripcion: linea.descripcion ?? undefined,
      fechaActivacion: linea.fechaActivacion ?? undefined,
      fechaVencimientoPlan: linea.fechaVencimientoPlan ?? undefined
    };
  }
}
