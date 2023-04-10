import { Request } from 'express';
import { AuthService } from '../services/auth.service';
import { User } from 'src/users/entities/user.entity';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: Request): {
        access_token: string;
        user: User;
    };
}
