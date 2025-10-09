import { DatabaseService } from '../database/database.service';
export declare class UsuariosService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(data: {
        nombre: string;
        email: string;
        password: string;
        id_rol: number;
    }): Promise<{
        id: any;
    }>;
    update(id: number, data: Partial<{
        nombre: string;
        email: string;
        id_rol: number;
    }>): Promise<any>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
