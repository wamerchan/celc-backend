import { DatabaseService } from '../database/database.service';
export declare class LineasService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<{
        id: number;
        descripcion: string | null;
        numeroTelefono: string;
        operador: string;
        planDatos: string | null;
        estado: import("@prisma/client").$Enums.LineasEstado | null;
        fechaActivacion: Date | null;
        fechaVencimientoPlan: Date | null;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        descripcion: string | null;
        numeroTelefono: string;
        operador: string;
        planDatos: string | null;
        estado: import("@prisma/client").$Enums.LineasEstado | null;
        fechaActivacion: Date | null;
        fechaVencimientoPlan: Date | null;
    } | null>;
    create(data: any): Promise<{
        id: number;
    }>;
    update(id: number, data: any): Promise<{
        id: number;
        descripcion: string | null;
        numeroTelefono: string;
        operador: string;
        planDatos: string | null;
        estado: import("@prisma/client").$Enums.LineasEstado | null;
        fechaActivacion: Date | null;
        fechaVencimientoPlan: Date | null;
    } | null>;
    delete(id: number): Promise<{
        message: string;
    }>;
    toggleStatus(id: number): Promise<any>;
}
