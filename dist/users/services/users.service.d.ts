import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';
import { NFT } from '../entities/nft.entity';
import { CustomersService } from './customers.service';
export declare class UsersService {
    private configService;
    private userRepo;
    private nftRepo;
    private customersService;
    constructor(configService: ConfigService, userRepo: Repository<User>, nftRepo: Repository<NFT>, customersService: CustomersService);
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByWalletAddress(walletAddress: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    create(data: CreateUserDto): Promise<User>;
    update(id: number, changes: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    addNftByUser(userId: number, nftId: number): Promise<User>;
    removeNftByUser(userId: number, nftId: number): Promise<User>;
}
