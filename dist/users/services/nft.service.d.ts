import { NFT } from '../entities/nft.entity';
import { Repository } from 'typeorm';
import { CreateNFTDto, UpdateNFTDto } from '../dtos/nft.dto';
export declare class NftService {
    private nftRepo;
    constructor(nftRepo: Repository<NFT>);
    findAll(): Promise<NFT[]>;
    findAllWithUser(): Promise<NFT[]>;
    findOne(name: string): Promise<NFT>;
    create(data: CreateNFTDto): Promise<NFT>;
    update(id: number, changes: UpdateNFTDto): Promise<NFT>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
