import { DatabaseService } from '../database/database.service';
export declare class AsignacionesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<({
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
        };
        equipo: {
            id: number;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            fechaAdquisicion: Date | null;
            descripcion: string | null;
        } | null;
        linea: {
            id: number;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
    } & {
        id: number;
        usuarioId: number;
        equipoId: number | null;
        lineaId: number | null;
        fechaAsignacion: Date;
        fechaDesasignacion: Date | null;
        observaciones: string | null;
    })[]>;
    findById(id: number): Promise<({
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
        };
        equipo: {
            id: number;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            fechaAdquisicion: Date | null;
            descripcion: string | null;
        } | null;
        linea: {
            id: number;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
    } & {
        id: number;
        usuarioId: number;
        equipoId: number | null;
        lineaId: number | null;
        fechaAsignacion: Date;
        fechaDesasignacion: Date | null;
        observaciones: string | null;
    }) | null>;
    create(data: any): Promise<{
        id: number;
    }>;
    update(id: number, data: any): Promise<({
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
        };
        equipo: {
            id: number;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            fechaAdquisicion: Date | null;
            descripcion: string | null;
        } | null;
        linea: {
            id: number;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
    } & {
        id: number;
        usuarioId: number;
        equipoId: number | null;
        lineaId: number | null;
        fechaAsignacion: Date;
        fechaDesasignacion: Date | null;
        observaciones: string | null;
    }) | null>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
