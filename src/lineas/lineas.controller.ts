import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { LineasService } from './lineas.service';
import { JwtGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role.guard';

@Controller('api/lineas')
@UseGuards(JwtGuard)
export class LineasController {
  constructor(private readonly lineasService: LineasService) {}

  @Get()
  async findAll() {
    return this.lineasService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.lineasService.findById(+id);
  }

  @Post()
  @UseGuards(RoleGuard([1, 2])) // Admin o Técnico
  async create(@Body() body: any) {
    return this.lineasService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.lineasService.update(+id, body);
  }

  @Delete(':id')
  @UseGuards(RoleGuard([1, 2]))
  async delete(@Param('id') id: string) {
    return this.lineasService.delete(+id);
  }
}