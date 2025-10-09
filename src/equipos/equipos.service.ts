import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EquiposService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    const sql = 'SELECT * FROM Equipos';
    return this.databaseService.query(sql);
  }

  async findById(id: number) {
    const sql = 'SELECT * FROM Equipos WHERE id = ?';
    const equipos = await this.databaseService.query(sql, [id]);
    return equipos[0] || null;
  }

  async create(data: any) {
    const sql = 'INSERT INTO Equipos (modelo, imei, estado, fecha_adquisicion) VALUES (?, ?, ?, ?)';
    const result = await this.databaseService.query(sql, [data.modelo, data.imei, data.estado, data.fecha_adquisicion]);
    return { id: (result as any).insertId };
  }

  async update(id: number, data: any) {
    const sql = 'UPDATE Equipos SET modelo = ?, imei = ?, estado = ?, fecha_adquisicion = ? WHERE id = ?';
    await this.databaseService.query(sql, [data.modelo, data.imei, data.estado, data.fecha_adquisicion, id]);
    return this.findById(id);
  }

  async delete(id: number) {
    const sql = 'DELETE FROM Equipos WHERE id = ?';
    await this.databaseService.query(sql, [id]);
    return { message: 'Equipo eliminado' };
  }
}