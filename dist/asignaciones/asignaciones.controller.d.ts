import { AsignacionesService } from './asignaciones.service';
export declare class AsignacionesController {
    private readonly asignacionesService;
    constructor(asignacionesService: AsignacionesService);
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
