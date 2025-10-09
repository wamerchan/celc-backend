import { EquiposService } from './equipos.service';
export declare class EquiposController {
    private readonly equiposService;
    constructor(equiposService: EquiposService);
    findAll(): Promise<any>;
    findById(id: string): Promise<any>;
    create(body: any): Promise<{
        id: any;
    }>;
    update(id: string, body: any): Promise<any>;
    delete(id: string): Promise<{
        message: string;
    }>;
}
