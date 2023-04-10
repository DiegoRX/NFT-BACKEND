import { NFT } from './nft.entity';
import { User } from './user.entity';
export declare class NFTUnique {
    id: number;
    tokenUri: string;
    tokenId: number;
    address: string;
    createAt: Date;
    updateAt: Date;
    user: User;
    nft: NFT;
}
