import { DatabaseService } from '../database/database.service';
export declare class RevisionesService {
    private databaseService;
    constructor(databaseService: DatabaseService);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    create(data: any): Promise<{
        id: any;
    }>;
    update(id: number, data: any): Promise<any>;
}
