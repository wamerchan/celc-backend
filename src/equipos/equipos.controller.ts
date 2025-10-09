import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { EquiposService } from './equipos.service';
import { JwtGuard } from '../auth/jwt.guard';

@Controller('api/equipos')
@UseGuards(JwtGuard)
export class EquiposController {
  constructor(private readonly equiposService: EquiposService) {}

  @Get()
  async findAll() {
    return this.equiposService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.equiposService.findById(+id);
  }

  @Post()
  async create(@Body() body: any) {
    return this.equiposService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.equiposService.update(+id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.equiposService.delete(+id);
  }
}