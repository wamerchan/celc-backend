import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<{
        message: string;
    }>;
    login(body: LoginDto): Promise<{
        token: any;
        user: {
            id: number;
            nombres: string;
            apellidos: string;
            email: string;
            rol: string;
            rolId: number;
        };
    }>;
    verify(req: any): Promise<{
        valid: boolean;
        user: {
            id: number;
            nombres: string;
            apellidos: string;
            email: string;
            rol: string;
            rolId: number;
        };
    }>;
}
