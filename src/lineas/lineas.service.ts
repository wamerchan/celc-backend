import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class LineasService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    const sql = `
      SELECT 
        id_linea AS id,
        numero_telefono AS numero,
        operador,
        plan_datos AS plan,
        estado,
        fecha_activacion,
        fecha_vencimiento_plan,
        descripcion
      FROM Lineas
    `;
    return this.databaseService.query(sql);
  }

  async findById(id: number) {
    const sql = `
      SELECT 
        id_linea AS id,
        numero_telefono AS numero,
        operador,
        plan_datos AS plan,
        estado,
        fecha_activacion,
        fecha_vencimiento_plan,
        descripcion
      FROM Lineas 
      WHERE id_linea = ?
    `;
    const lineas = await this.databaseService.query(sql, [id]);
    return lineas[0] || null;
  }

  async create(data: any) {
    const sql = 'INSERT INTO Lineas (numero_telefono, operador, plan_datos, estado, fecha_activacion) VALUES (?, ?, ?, ?, NOW())';
    const result = await this.databaseService.query(sql, [data.numero, data.operador, data.plan, data.estado]);
    return { id: (result as any).insertId };
  }

  async update(id: number, data: any) {
    const sql = 'UPDATE Lineas SET numero_telefono = ?, operador = ?, plan_datos = ?, estado = ? WHERE id_linea = ?';
    await this.databaseService.query(sql, [data.numero, data.operador, data.plan, data.estado, id]);
    return this.findById(id);
  }

  async delete(id: number) {
    const sql = 'DELETE FROM Lineas WHERE id_linea = ?';
    await this.databaseService.query(sql, [id]);
    return { message: 'Línea eliminada' };
  }

  // Método para cambiar el estado de una línea entre Activa e Inactiva - 20 de octubre de 2025 - WM Developer
  async toggleStatus(id: number): Promise<any> {
    const linea: any = await this.findById(id);
    if (!linea) {
      throw new Error('Línea no encontrada');
    }

    // Cambia el estado: si es 'Activa', pasa a 'Inactiva' y viceversa
    const nuevoEstado = linea.estado === 'Activa' ? 'Inactiva' : 'Activa';
    const sql = 'UPDATE Lineas SET estado = ? WHERE id_linea = ?';
    await this.databaseService.query(sql, [nuevoEstado, id]);

    return this.findById(id);
  }
}