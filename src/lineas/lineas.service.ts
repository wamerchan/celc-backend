import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { LineasEstado } from '@prisma/client';

@Injectable()
export class LineasService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.linea.findMany();
  }

  async findById(id: number) {
    return this.databaseService.linea.findUnique({
      where: { id }
    });
  }

  async create(data: any) {
    const linea = await this.databaseService.linea.create({
      data: {
        numeroTelefono: data.numeroTelefono,
        operador: data.operador,
        planDatos: data.planDatos,
        estado: data.estado || LineasEstado.Activa,
        fechaActivacion: data.fechaActivacion ? new Date(data.fechaActivacion) : new Date(),
        fechaVencimientoPlan: data.fechaVencimientoPlan ? new Date(data.fechaVencimientoPlan) : undefined,
        descripcion: data.descripcion
      }
    });
    return { id: linea.id };
  }

  async update(id: number, data: any) {
    await this.databaseService.linea.update({
      where: { id },
      data: {
        numeroTelefono: data.numeroTelefono,
        operador: data.operador,
        planDatos: data.planDatos,
        estado: data.estado,
        fechaActivacion: data.fechaActivacion ? new Date(data.fechaActivacion) : undefined,
        fechaVencimientoPlan: data.fechaVencimientoPlan ? new Date(data.fechaVencimientoPlan) : undefined,
        descripcion: data.descripcion
      }
    });
    return this.findById(id);
  }

  async delete(id: number) {
    await this.databaseService.linea.delete({
      where: { id }
    });
    return { message: 'Línea eliminada' };
  }

  async toggleStatus(id: number): Promise<any> {
    const linea = await this.findById(id);
    if (!linea) {
      throw new NotFoundException('Línea no encontrada');
    }

    const nuevoEstado = linea.estado === LineasEstado.Activa ? LineasEstado.Inactiva : LineasEstado.Activa;
    await this.databaseService.linea.update({
      where: { id },
      data: { estado: nuevoEstado }
    });

    return this.findById(id);
  }
}