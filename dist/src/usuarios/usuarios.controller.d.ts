import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioResponseDto } from './usuarios.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): Promise<UsuarioResponseDto[]>;
    findById(id: string): Promise<UsuarioResponseDto | null>;
    create(body: CreateUsuarioDto): Promise<any>;
    update(id: string, body: UpdateUsuarioDto): Promise<any>;
    delete(id: string): Promise<any>;
}
