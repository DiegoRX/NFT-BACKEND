import { NFT } from '../entities/nft.entity';
import { Repository } from 'typeorm';
import { NFTUnique } from '../entities/uniqueNFT.entity';
import { User } from '../entities/user.entity';
import { CreateNFTuniqueDto, UpdateNFTuniqueDto } from '../dtos/uniqueNFT.dto';
export declare class UniqueNftService {
    private NFTUniqueRepo;
    private NFTRepo;
    private userRepo;
    constructor(NFTUniqueRepo: Repository<NFTUnique>, NFTRepo: Repository<NFT>, userRepo: Repository<User>);
    findAll(): Promise<NFTUnique[]>;
    findOne(tokenId: number): Promise<NFTUnique>;
    create(data: CreateNFTuniqueDto): Promise<NFTUnique>;
    update(tokenId: number, changes: UpdateNFTuniqueDto): Promise<NFTUnique>;
    remove(tokenId: number): Promise<import("typeorm").DeleteResult>;
}
