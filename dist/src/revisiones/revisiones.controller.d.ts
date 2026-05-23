import { RevisionesService } from './revisiones.service';
export declare class RevisionesController {
    private readonly revisionesService;
    constructor(revisionesService: RevisionesService);
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
    findById(id: string): Promise<({
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
    create(body: any): Promise<{
        id: number;
    }>;
    update(id: string, body: any): Promise<({
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
