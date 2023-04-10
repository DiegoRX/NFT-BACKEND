import { CreateNFTuniqueDto, UpdateNFTuniqueDto } from '../dtos/uniqueNFT.dto';
import { UniqueNftService } from '../services/unique-nft.service';
export declare class UniqueNftController {
    private uniqueNftService;
    constructor(uniqueNftService: UniqueNftService);
    getUniqueNfts(): Promise<import("../entities/uniqueNFT.entity").NFTUnique[]>;
    getProductFilter(): string;
    getOne(productId: number): Promise<import("../entities/uniqueNFT.entity").NFTUnique>;
    create(payload: CreateNFTuniqueDto): Promise<import("../entities/uniqueNFT.entity").NFTUnique>;
    update(id: number, payload: UpdateNFTuniqueDto): Promise<import("../entities/uniqueNFT.entity").NFTUnique>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
