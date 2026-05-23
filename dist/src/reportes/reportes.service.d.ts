import { DatabaseService } from '../database/database.service';
export declare class ReportesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    getLineasReport(filters: any): Promise<({
        asignaciones: ({
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
        } & {
            id: number;
            fechaDesasignacion: Date | null;
            usuarioId: number;
            equipoId: number | null;
            lineaId: number | null;
            fechaAsignacion: Date;
            observaciones: string | null;
        })[];
    } & {
        id: number;
        numeroTelefono: string;
        operador: string;
        planDatos: string | null;
        estado: import("@prisma/client").$Enums.LineasEstado | null;
        fechaActivacion: Date | null;
        fechaVencimientoPlan: Date | null;
        descripcion: string | null;
    })[]>;
    getEquiposReport(filters: any): Promise<({
        revisiones: {
            id: number;
            equipoId: number;
            observaciones: string | null;
            fechaProgramada: Date;
            fechaRealizada: Date | null;
            resultado: import("@prisma/client").$Enums.RevisionesResultado | null;
            realizadaPorUsuario: number | null;
        }[];
    } & {
        id: number;
        estado: import("@prisma/client").$Enums.EquiposEstado | null;
        descripcion: string | null;
        marca: string;
        modelo: string;
        numeroSerie: string;
        imei: string | null;
        fechaAdquisicion: Date | null;
    })[]>;
    getAsignacionesReport(filters: any): Promise<({
        linea: {
            id: number;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
            descripcion: string | null;
        } | null;
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
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            descripcion: string | null;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            fechaAdquisicion: Date | null;
        } | null;
    } & {
        id: number;
        fechaDesasignacion: Date | null;
        usuarioId: number;
        equipoId: number | null;
        lineaId: number | null;
        fechaAsignacion: Date;
        observaciones: string | null;
    })[]>;
}
