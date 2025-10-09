import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AsignacionesService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    const sql = 'SELECT * FROM Asignaciones';
    return this.databaseService.query(sql);
  }

  async findById(id: number) {
    const sql = 'SELECT * FROM Asignaciones WHERE id = ?';
    const asignaciones = await this.databaseService.query(sql, [id]);
    return asignaciones[0] || null;
  }

  async create(data: any) {
    const sql = 'INSERT INTO Asignaciones (id_usuario, id_equipo, id_linea, fecha_asignacion) VALUES (?, ?, ?, NOW())';
    const result = await this.databaseService.query(sql, [data.id_usuario, data.id_equipo, data.id_linea]);
    return { id: (result as any).insertId };
  }

  async update(id: number, data: any) {
    const sql = 'UPDATE Asignaciones SET id_usuario = ?, id_equipo = ?, id_linea = ?, fecha_desasignacion = ? WHERE id = ?';
    await this.databaseService.query(sql, [data.id_usuario, data.id_equipo, data.id_linea, data.fecha_desasignacion, id]);
    return this.findById(id);
  }

  async delete(id: number) {
    const sql = 'DELETE FROM Asignaciones WHERE id = ?';
    await this.databaseService.query(sql, [id]);
    return { message: 'Asignación eliminada' };
  }
}