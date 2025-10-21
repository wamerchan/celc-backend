import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsuariosService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    const sql = `
      SELECT 
        u.id_usuario AS id, 
        u.nombres, 
        u.apellidos, 
        u.correo_electronico AS email, 
        u.id_rol,
        r.nombre_rol AS rol,
        u.fecha_creacion, 
        u.ultimo_login 
      FROM Usuarios u
      LEFT JOIN Roles r ON u.id_rol = r.id_rol
    `;
    return this.databaseService.query(sql);
  }

  async findById(id: number) {
    const sql = `
      SELECT 
        u.id_usuario AS id, 
        u.nombres, 
        u.apellidos, 
        u.correo_electronico AS email, 
        u.id_rol,
        r.nombre_rol AS rol,
        u.fecha_creacion, 
        u.ultimo_login 
      FROM Usuarios u
      LEFT JOIN Roles r ON u.id_rol = r.id_rol
      WHERE u.id_usuario = ?
    `;
    const users = await this.databaseService.query(sql, [id]);
    return users[0] || null;
  }

  async create(data: { nombre: string; email: string; password: string; id_rol: number }) {
    const sql = 'INSERT INTO Usuarios (nombres, correo_electronico, contrasena_hash, id_rol, fecha_creacion) VALUES (?, ?, ?, ?, NOW())';
    const result = await this.databaseService.query(sql, [data.nombre, data.email, data.password, data.id_rol]);
    return { id: (result as any).insertId };
  }

  async update(id: number, data: Partial<{ nombre: string; email: string; id_rol: number }>) {
    const fields: string[] = [];
    const values: any[] = [];
    if (data.nombre) { fields.push('nombres = ?'); values.push(data.nombre); }
    if (data.email) { fields.push('correo_electronico = ?'); values.push(data.email); }
    if (data.id_rol) { fields.push('id_rol = ?'); values.push(data.id_rol); }
    if (fields.length === 0) return null;
    const sql = `UPDATE Usuarios SET ${fields.join(', ')} WHERE id_usuario = ?`;
    values.push(id);
    await this.databaseService.query(sql, values);
    return this.findById(id);
  }

  async delete(id: number) {
    const sql = 'DELETE FROM Usuarios WHERE id_usuario = ?';
    await this.databaseService.query(sql, [id]);
    return { message: 'Usuario eliminado' };
  }
}