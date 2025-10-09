import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { JwtGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role.guard';

@Controller('api/usuarios')
@UseGuards(JwtGuard)
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  @UseGuards(RoleGuard([1])) // Solo Administrador
  async findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.usuariosService.findById(+id);
  }

  @Post()
  @UseGuards(RoleGuard([1]))
  async create(@Body() body: { nombre: string; email: string; password: string; id_rol: number }) {
    return this.usuariosService.create(body);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: any) {
    return this.usuariosService.update(+id, body);
  }

  @Delete(':id')
  @UseGuards(RoleGuard([1]))
  async delete(@Param('id') id: string) {
    return this.usuariosService.delete(+id);
  }
}