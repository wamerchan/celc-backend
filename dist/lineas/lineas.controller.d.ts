import { LineasService } from './lineas.service';
import { CreateLineaDto, UpdateLineaDto, LineaResponseDto } from './lineas.dto';
export declare class LineasController {
    private readonly lineasService;
    constructor(lineasService: LineasService);
    findAll(): Promise<LineaResponseDto[]>;
    findById(id: string): Promise<LineaResponseDto | null>;
    create(body: CreateLineaDto): Promise<any>;
    update(id: string, body: UpdateLineaDto): Promise<any>;
    delete(id: string): Promise<any>;
}
