import { DatabaseService } from '../database/database.service';
export declare class RevisionesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<({
        equipo: {
            id: number;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            fechaAdquisicion: Date | null;
            descripcion: string | null;
        };
        usuario: {
            id: number;
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            rolId: number;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
        } | null;
    } & {
        id: number;
        equipoId: number;
        fechaProgramada: Date;
        fechaRealizada: Date | null;
        resultado: import("@prisma/client").$Enums.RevisionesResultado | null;
        observaciones: string | null;
        realizadaPorUsuario: number | null;
    })[]>;
    findById(id: number): Promise<({
        equipo: {
            id: number;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            fechaAdquisicion: Date | null;
            descripcion: string | null;
        };
        usuario: {
            id: number;
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            rolId: number;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
        } | null;
    } & {
        id: number;
        equipoId: number;
        fechaProgramada: Date;
        fechaRealizada: Date | null;
        resultado: import("@prisma/client").$Enums.RevisionesResultado | null;
        observaciones: string | null;
        realizadaPorUsuario: number | null;
    }) | null>;
    create(data: any): Promise<{
        id: number;
    }>;
    update(id: number, data: any): Promise<({
        equipo: {
            id: number;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            fechaAdquisicion: Date | null;
            descripcion: string | null;
        };
        usuario: {
            id: number;
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            rolId: number;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
        } | null;
    } & {
        id: number;
        equipoId: number;
        fechaProgramada: Date;
        fechaRealizada: Date | null;
        resultado: import("@prisma/client").$Enums.RevisionesResultado | null;
        observaciones: string | null;
        realizadaPorUsuario: number | null;
    }) | null>;
}
