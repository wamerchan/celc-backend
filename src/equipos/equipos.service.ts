import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EquiposService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.equipo.findMany();
  }

  async findById(id: number) {
    return this.databaseService.equipo.findUnique({
      where: { id }
    });
  }

  async create(data: any) {
    const equipo = await this.databaseService.equipo.create({
      data: {
        marca: data.marca || 'N/A',
        modelo: data.modelo || 'N/A',
        numeroSerie: data.numeroSerie || Date.now().toString(),
        imei: data.imei,
        estado: data.estado,
        fechaAdquisicion: data.fecha_adquisicion ? new Date(data.fecha_adquisicion) : undefined,
        descripcion: data.descripcion
      }
    });
    return { id: equipo.id };
  }

  async update(id: number, data: any) {
    await this.databaseService.equipo.update({
      where: { id },
      data: {
        marca: data.marca,
        modelo: data.modelo,
        numeroSerie: data.numeroSerie,
        imei: data.imei,
        estado: data.estado,
        fechaAdquisicion: data.fecha_adquisicion ? new Date(data.fecha_adquisicion) : undefined,
        descripcion: data.descripcion
      }
    });
    return this.findById(id);
  }

  async delete(id: number) {
    await this.databaseService.equipo.delete({
      where: { id }
    });
    return { message: 'Equipo eliminado' };
  }
}