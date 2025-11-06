import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(body: RegisterDto): Promise<{
        message: string;
    }>;
    login(body: LoginDto): Promise<{
        token: string;
        user: {
            id: number;
            nombre: string;
            email: string;
            rol: string;
        };
    }>;
    verify(req: any): Promise<{
        valid: boolean;
        user: any;
    }>;
}
