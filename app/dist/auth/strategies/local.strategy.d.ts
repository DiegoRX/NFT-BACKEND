import { AuthService } from '../services/auth.service';
import { Strategy } from 'passport-local';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<{
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
}
export {};
