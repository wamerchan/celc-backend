import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class LineasService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    const sql = 'SELECT * FROM Lineas';
    return this.databaseService.query(sql);
  }

  async findById(id: number) {
    const sql = 'SELECT * FROM Lineas WHERE id = ?';
    const lineas = await this.databaseService.query(sql, [id]);
    return lineas[0] || null;
  }

  async create(data: any) {
    const sql = 'INSERT INTO Lineas (numero, estado, fecha_creacion) VALUES (?, ?, NOW())';
    const result = await this.databaseService.query(sql, [data.numero, data.estado]);
    return { id: (result as any).insertId };
  }

  async update(id: number, data: any) {
    const sql = 'UPDATE Lineas SET numero = ?, estado = ? WHERE id = ?';
    await this.databaseService.query(sql, [data.numero, data.estado, id]);
    return this.findById(id);
  }

  async delete(id: number) {
    const sql = 'DELETE FROM Lineas WHERE id = ?';
    await this.databaseService.query(sql, [id]);
    return { message: 'Línea eliminada' };
  }
}