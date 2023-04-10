import { NFTUnique } from './uniqueNFT.entity';
export declare class NFT {
    id: number;
    name: string;
    address: string;
    description: string;
    price: number;
    mintedNFT: number;
    image: string;
    available: boolean;
    createdAt: Date;
    updatedAt: Date;
    nfts: NFTUnique[];
}
