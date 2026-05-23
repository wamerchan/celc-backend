import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    const users = await this.databaseService.usuario.findMany({
      include: {
        rol: true
      }
    });
    return users.map(u => ({
      id: u.id,
      nombre: u.nombres, nombres: u.nombres,
      apellidos: u.apellidos,
      email: u.correoElectronico,
      id_rol: u.rolId,
      rol: u.rol.nombreRol,
      fecha_creacion: u.fechaCreacion,
      ultimo_login: u.ultimoLogin
    }));
  }

  async findById(id: number) {
    const u = await this.databaseService.usuario.findUnique({
      where: { id },
      include: {
        rol: true
      }
    });
    if (!u) return null;
    return {
      id: u.id,
      nombre: u.nombres, nombres: u.nombres,
      apellidos: u.apellidos,
      email: u.correoElectronico,
      id_rol: u.rolId,
      rol: u.rol.nombreRol,
      fecha_creacion: u.fechaCreacion,
      ultimo_login: u.ultimoLogin
    };
  }

  async create(data: { nombre: string; apellidos?: string; email: string; password: string; id_rol: number; cedula?: string }) {
    const saltRounds = 10;
    const contrasenaHash = await bcrypt.hash(data.password, saltRounds);

    const user = await this.databaseService.usuario.create({
      data: {
        nombres: data.nombre,
        apellidos: data.apellidos || '',
        correoElectronico: data.email,
        contrasenaHash: contrasenaHash,
        rolId: data.id_rol,
        cedula: data.cedula || Date.now().toString(), // temporary fix if cedula is missing since it's required in schema
      }
    });
    return { id: user.id };
  }

  async update(id: number, data: Partial<{ nombre: string; apellidos: string; email: string; id_rol: number; cedula: string }>) {
    const updateData: any = {};
    if (data.nombre) updateData.nombres = data.nombre;
    if (data.apellidos) updateData.apellidos = data.apellidos;
    if (data.email) updateData.correoElectronico = data.email;
    if (data.id_rol) updateData.rolId = data.id_rol;
    if (data.cedula) updateData.cedula = data.cedula;

    if (Object.keys(updateData).length === 0) return null;

    await this.databaseService.usuario.update({
      where: { id },
      data: updateData
    });
    return this.findById(id);
  }

  async delete(id: number) {
    await this.databaseService.usuario.delete({
      where: { id }
    });
    return { message: 'Usuario eliminado' };
  }
}