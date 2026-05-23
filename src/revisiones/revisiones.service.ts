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
        equipoId: data.equipoId ?? data.id_equipo,
        realizadaPorUsuario: data.realizadaPorUsuario ?? data.id_tecnico,
        fechaProgramada: new Date(data.fechaProgramada ?? data.fecha_programada),
        resultado: data.resultado ?? data.estado ?? undefined,
        observaciones: data.observaciones ?? data.resultados ?? undefined
      }
    });
    return { id: revision.id };
  }

  async update(id: number, data: any) {
    const dateProgramada = data.fechaProgramada ?? data.fecha_programada;
    const dateRealizada = data.fechaRealizada ?? data.fecha_realizada;
    await this.databaseService.revision.update({
      where: { id },
      data: {
        equipoId: data.equipoId ?? data.id_equipo,
        realizadaPorUsuario: data.realizadaPorUsuario ?? data.id_tecnico,
        fechaProgramada: dateProgramada ? new Date(dateProgramada) : undefined,
        fechaRealizada: dateRealizada ? new Date(dateRealizada) : undefined,
        resultado: data.resultado ?? data.estado ?? undefined,
        observaciones: data.observaciones ?? data.resultados ?? undefined
      }
    });
    return this.findById(id);
  }
}