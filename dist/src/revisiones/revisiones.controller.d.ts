import { RevisionesService } from './revisiones.service';
export declare class RevisionesController {
    private readonly revisionesService;
    constructor(revisionesService: RevisionesService);
    findAll(): Promise<({
        equipo: {
            id: number;
            descripcion: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            fechaAdquisicion: Date | null;
        };
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
        } | null;
    } & {
        id: number;
        equipoId: number;
        observaciones: string | null;
        fechaProgramada: Date;
        fechaRealizada: Date | null;
        resultado: import("@prisma/client").$Enums.RevisionesResultado | null;
        realizadaPorUsuario: number | null;
    })[]>;
    findById(id: string): Promise<({
        equipo: {
            id: number;
            descripcion: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            fechaAdquisicion: Date | null;
        };
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
        } | null;
    } & {
        id: number;
        equipoId: number;
        observaciones: string | null;
        fechaProgramada: Date;
        fechaRealizada: Date | null;
        resultado: import("@prisma/client").$Enums.RevisionesResultado | null;
        realizadaPorUsuario: number | null;
    }) | null>;
    create(body: any): Promise<{
        id: number;
    }>;
    update(id: string, body: any): Promise<({
        equipo: {
            id: number;
            descripcion: string | null;
            estado: import("@prisma/client").$Enums.EquiposEstado | null;
            marca: string;
            modelo: string;
            numeroSerie: string;
            imei: string | null;
            fechaAdquisicion: Date | null;
        };
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
        } | null;
    } & {
        id: number;
        equipoId: number;
        observaciones: string | null;
        fechaProgramada: Date;
        fechaRealizada: Date | null;
        resultado: import("@prisma/client").$Enums.RevisionesResultado | null;
        realizadaPorUsuario: number | null;
    }) | null>;
}
