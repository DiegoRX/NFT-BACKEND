import { Customer } from './customer.entity';
import { NFTUnique } from './uniqueNFT.entity';
export declare class User {
    id: number;
    email: string;
    name: string;
    walletAddress: string;
    address: string;
    phone: string;
    city: string;
    country: string;
    password: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
    customer: Customer;
    nfts: NFTUnique[];
}
