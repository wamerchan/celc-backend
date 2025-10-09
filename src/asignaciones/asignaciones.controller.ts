import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { AsignacionesService } from './asignaciones.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('api/asignaciones')
@UseGuards(JwtGuard)
export class AsignacionesController {
  constructor(private readonly asignacionesService: AsignacionesService) {}

  @Get()
  async findAll() {
    return this.asignacionesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.asignacionesService.findById(+id);
  }

  @Post()
  async create(@Body() body: any) {
    return this.asignacionesService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.asignacionesService.update(+id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.asignacionesService.delete(+id);
  }
}