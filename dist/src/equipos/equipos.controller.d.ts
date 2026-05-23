import { EquiposService } from './equipos.service';
export declare class EquiposController {
    private readonly equiposService;
    constructor(equiposService: EquiposService);
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
    findById(id: string): Promise<{
        id: number;
        descripcion: string | null;
        estado: import("@prisma/client").$Enums.EquiposEstado | null;
        marca: string;
        modelo: string;
        numeroSerie: string;
        imei: string | null;
        fechaAdquisicion: Date | null;
    } | null>;
    create(body: any): Promise<{
        id: number;
    }>;
    update(id: string, body: any): Promise<{
        id: number;
        descripcion: string | null;
        estado: import("@prisma/client").$Enums.EquiposEstado | null;
        marca: string;
        modelo: string;
        numeroSerie: string;
        imei: string | null;
        fechaAdquisicion: Date | null;
    } | null>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
