import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class AsignacionesService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.asignacion.findMany({
      include: {
        usuario: true,
        equipo: true,
        linea: true
      }
    });
  }

  async findById(id: number) {
    return this.databaseService.asignacion.findUnique({
      where: { id },
      include: {
        usuario: true,
        equipo: true,
        linea: true
      }
    });
  }

  async create(data: any) {
    const asignacion = await this.databaseService.asignacion.create({
      data: {
        usuarioId: data.usuarioId ?? data.id_usuario,
        equipoId: data.equipoId !== undefined ? data.equipoId : data.id_equipo,
        lineaId: data.lineaId !== undefined ? data.lineaId : data.id_linea,
        fechaAsignacion: new Date(),
        observaciones: data.observaciones
      }
    });
    return { id: asignacion.id };
  }

  async update(id: number, data: any) {
    await this.databaseService.asignacion.update({
      where: { id },
      data: {
        usuarioId: data.usuarioId ?? data.id_usuario,
        equipoId: data.equipoId !== undefined ? data.equipoId : data.id_equipo,
        lineaId: data.lineaId !== undefined ? data.lineaId : data.id_linea,
        fechaDesasignacion: data.fecha_desasignacion ? new Date(data.fecha_desasignacion) : null,
        observaciones: data.observaciones
      }
    });
    return this.findById(id);
  }

  async delete(id: number) {
    await this.databaseService.asignacion.delete({
      where: { id }
    });
    return { message: 'Asignación eliminada' };
  }
}