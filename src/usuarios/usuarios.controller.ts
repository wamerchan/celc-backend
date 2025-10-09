import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { UsuariosService } from './usuarios.service';
import { JwtGuard } from '../auth/jwt.guard';
import { RoleGuard } from '../auth/role.guard';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioResponseDto } from './usuarios.dto';

@ApiTags('usuarios')
@ApiBearerAuth('JWT-auth')
@Controller('api/usuarios')
@UseGuards(JwtGuard)
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  @UseGuards(new RoleGuard([1])) // Solo Administrador
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios', type: [UsuarioResponseDto] })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async findAll(): Promise<UsuarioResponseDto[]> {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiParam({ name: 'id', description: 'ID del usuario', example: 1 })
  @ApiResponse({ status: 200, description: 'Usuario encontrado', type: UsuarioResponseDto })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async findById(@Param('id') id: string): Promise<UsuarioResponseDto | null> {
    return this.usuariosService.findById(+id);
  }

  @Post()
  @UseGuards(new RoleGuard([1]))
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado exitosamente', type: UsuarioResponseDto })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async create(@Body() body: CreateUsuarioDto): Promise<any> {
    return this.usuariosService.create(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un usuario' })
  @ApiParam({ name: 'id', description: 'ID del usuario a actualizar', example: 1 })
  @ApiResponse({ status: 200, description: 'Usuario actualizado', type: UsuarioResponseDto })
  @ApiResponse({ status: 400, description: 'Datos inválidos' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  async update(@Param('id') id: string, @Body() body: UpdateUsuarioDto): Promise<any> {
    return this.usuariosService.update(+id, body);
  }

  @Delete(':id')
  @UseGuards(new RoleGuard([1]))
  @ApiOperation({ summary: 'Eliminar un usuario' })
  @ApiParam({ name: 'id', description: 'ID del usuario a eliminar', example: 1 })
  @ApiResponse({ status: 200, description: 'Usuario eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado' })
  @ApiResponse({ status: 401, description: 'No autorizado' })
  @ApiResponse({ status: 403, description: 'Acceso denegado' })
  async delete(@Param('id') id: string): Promise<any> {
    return this.usuariosService.delete(+id);
  }
}