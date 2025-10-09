import { DatabaseService } from '../database/database.service';
export declare class AsignacionesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(data: any): Promise<{
        id: any;
    }>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
