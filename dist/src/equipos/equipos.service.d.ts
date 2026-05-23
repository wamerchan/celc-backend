import { DatabaseService } from '../database/database.service';
export declare class EquiposService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<{
        id: number;
        descripcion: string | null;
        estado: import("@prisma/client").$Enums.EquiposEstado | null;
        marca: string;
        modelo: string;
        numeroSerie: string;
        imei: string | null;
        fechaAdquisicion: Date | null;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        descripcion: string | null;
        estado: import("@prisma/client").$Enums.EquiposEstado | null;
        marca: string;
        modelo: string;
        numeroSerie: string;
        imei: string | null;
        fechaAdquisicion: Date | null;
    } | null>;
    create(data: any): Promise<{
        id: number;
    }>;
    update(id: number, data: any): Promise<{
        id: number;
        descripcion: string | null;
        estado: import("@prisma/client").$Enums.EquiposEstado | null;
        marca: string;
        modelo: string;
        numeroSerie: string;
        imei: string | null;
        fechaAdquisicion: Date | null;
    } | null>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
