import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users.service';
import { User } from 'src/users/entities/user.entity';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<{
        id: number;
        email: string;
        name: string;
        walletAddress: string;
        address: string;
        phone: string;
        city: string;
        country: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
        customer: import("../../users/entities/customer.entity").Customer;
        nfts: import("../../users/entities/uniqueNFT.entity").NFTUnique[];
    }>;
    generateJWT(user: User): {
        access_token: string;
        user: User;
    };
}
