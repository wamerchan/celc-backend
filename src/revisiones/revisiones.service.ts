import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class RevisionesService {
  constructor(private databaseService: DatabaseService) {}

  async findAll() {
    return this.databaseService.revision.findMany({
      include: {
        equipo: true,
        usuario: true
      }
    });
  }

  async findById(id: number) {
    return this.databaseService.revision.findUnique({
      where: { id },
      include: {
        equipo: true,
        usuario: true
      }
    });
  }

  async create(data: any) {
    const revision = await this.databaseService.revision.create({
      data: {
        equipoId: data.id_equipo,
        realizadaPorUsuario: data.id_tecnico,
        fechaProgramada: new Date(data.fecha_programada),
        resultado: data.estado || undefined,
        observaciones: data.resultados || undefined
      }
    });
    return { id: revision.id };
  }

  async update(id: number, data: any) {
    await this.databaseService.revision.update({
      where: { id },
      data: {
        equipoId: data.id_equipo,
        realizadaPorUsuario: data.id_tecnico,
        fechaProgramada: data.fecha_programada ? new Date(data.fecha_programada) : undefined,
        fechaRealizada: data.fecha_realizada ? new Date(data.fecha_realizada) : undefined,
        resultado: data.estado || undefined,
        observaciones: data.resultados || undefined
      }
    });
    return this.findById(id);
  }
}