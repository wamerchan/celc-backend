import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class RevisionesService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    const sql = 'SELECT * FROM Revisiones';
    return this.databaseService.query(sql);
  }

  async findById(id: number) {
    const sql = 'SELECT * FROM Revisiones WHERE id = ?';
    const revisiones = await this.databaseService.query(sql, [id]);
    return revisiones[0] || null;
  }

  async create(data: any) {
    const sql = 'INSERT INTO Revisiones (id_equipo, id_tecnico, fecha_programada, estado) VALUES (?, ?, ?, ?)';
    const result = await this.databaseService.query(sql, [data.id_equipo, data.id_tecnico, data.fecha_programada, data.estado]);
    return { id: (result as any).insertId };
  }

  async update(id: number, data: any) {
    const sql = 'UPDATE Revisiones SET id_equipo = ?, id_tecnico = ?, fecha_programada = ?, estado = ?, resultados = ? WHERE id = ?';
    await this.databaseService.query(sql, [data.id_equipo, data.id_tecnico, data.fecha_programada, data.estado, data.resultados, id]);
    return this.findById(id);
  }
}