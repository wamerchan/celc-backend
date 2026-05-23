import { DatabaseService } from '../database/database.service';
export declare class UsuariosService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<{
        id: number;
        nombre: string;
        nombres: string;
        apellidos: string;
        email: string;
        id_rol: number;
        rol: string;
        fecha_creacion: Date;
        ultimo_login: Date | null;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        nombre: string;
        nombres: string;
        apellidos: string;
        email: string;
        id_rol: number;
        rol: string;
        fecha_creacion: Date;
        ultimo_login: Date | null;
    } | null>;
    create(data: {
        nombre: string;
        apellidos?: string;
        email: string;
        password: string;
        id_rol: number;
        cedula?: string;
    }): Promise<{
        id: number;
    }>;
    update(id: number, data: Partial<{
        nombre: string;
        apellidos: string;
        email: string;
        id_rol: number;
        cedula: string;
    }>): Promise<{
        id: number;
        nombre: string;
        nombres: string;
        apellidos: string;
        email: string;
        id_rol: number;
        rol: string;
        fecha_creacion: Date;
        ultimo_login: Date | null;
    } | null>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
