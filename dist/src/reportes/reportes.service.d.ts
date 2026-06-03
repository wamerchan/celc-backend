import { DatabaseService } from '../database/database.service';
export declare class ReportesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    getLineasReport(filters: any): Promise<({
        asignaciones: ({
            usuario: {
                nombres: string;
                apellidos: string;
                cedula: string;
                fechaNacimiento: Date | null;
                correoElectronico: string;
                contrasenaHash: string;
                fechaCreacion: Date;
                ultimoLogin: Date | null;
                activo: boolean | null;
                id: number;
                rolId: number;
            };
        } & {
            id: number;
            usuarioId: number;
            equipoId: number | null;
            lineaId: number | null;
            fechaAsignacion: Date;
            fechaDesasignacion: Date | null;
            observaciones: string | null;
        })[];
    } & {
        id: number;
        descripcion: string | null;
        numeroTelefono: string;
        operador: string;
        planDatos: string | null;
        estado: import("@prisma/client").$Enums.LineasEstado | null;
        fechaActivacion: Date | null;
        fechaVencimientoPlan: Date | null;
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
        descripcion: string | null;
        estado: import("@prisma/client").$Enums.EquiposEstado | null;
        marca: string;
        modelo: string;
        numeroSerie: string;
        imei: string | null;
        fechaAdquisicion: Date | null;
    })[]>;
    getAsignacionesReport(filters: any): Promise<({
        equipo: {
            id: number;
            descripcion: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            fechaAdquisicion: Date | null;
        } | null;
        linea: {
            id: number;
            descripcion: string | null;
            numeroTelefono: string;
            operador: string;
            planDatos: string | null;
            estado: import("@prisma/client").$Enums.LineasEstado | null;
            fechaActivacion: Date | null;
            fechaVencimientoPlan: Date | null;
        } | null;
        usuario: {
            nombres: string;
            apellidos: string;
            cedula: string;
            fechaNacimiento: Date | null;
            correoElectronico: string;
            contrasenaHash: string;
            fechaCreacion: Date;
            ultimoLogin: Date | null;
            activo: boolean | null;
            id: number;
            rolId: number;
        };
    } & {
        id: number;
        usuarioId: number;
        equipoId: number | null;
        lineaId: number | null;
        fechaAsignacion: Date;
        fechaDesasignacion: Date | null;
        observaciones: string | null;
    })[]>;
}
