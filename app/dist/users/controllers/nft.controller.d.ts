import { NftService } from '../services/nft.service';
import { CreateNFTDto, UpdateNFTDto } from '../dtos/nft.dto';
export declare class NftController {
    private NFTService;
    constructor(NFTService: NftService);
    findAllWithUsers(): Promise<import("../entities/nft.entity").NFT[]>;
    findAll(): Promise<import("../entities/nft.entity").NFT[]>;
    get(name: string): Promise<import("../entities/nft.entity").NFT>;
    create(payload: CreateNFTDto): Promise<import("../entities/nft.entity").NFT>;
    update(id: number, payload: UpdateNFTDto): Promise<import("../entities/nft.entity").NFT>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
