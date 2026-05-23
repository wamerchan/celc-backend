import { DatabaseService } from '../database/database.service';
export declare class ReportesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    getLineasReport(filters: any): Promise<{
        id: number;
        descripcion: string | null;
        numeroTelefono: string;
        operador: string;
        planDatos: string | null;
        estado: import("@prisma/client").$Enums.LineasEstado | null;
        fechaActivacion: Date | null;
        fechaVencimientoPlan: Date | null;
    }[]>;
    getEquiposReport(filters: any): Promise<{
        id: number;
        descripcion: string | null;
        estado: import("@prisma/client").$Enums.EquiposEstado | null;
        marca: string;
        modelo: string;
        numeroSerie: string;
        imei: string | null;
        fechaAdquisicion: Date | null;
    }[]>;
    getAsignacionesReport(filters: any): Promise<{
        id: number;
        usuarioId: number;
        equipoId: number | null;
        lineaId: number | null;
        fechaAsignacion: Date;
        fechaDesasignacion: Date | null;
        observaciones: string | null;
    }[]>;
}
