export declare class CreateNFTuniqueDto {
    readonly tokenUri: string;
    readonly address: string;
    readonly tokenId: number;
    readonly userId: number;
    readonly nftId: number;
}
declare const UpdateNFTuniqueDto_base: import("@nestjs/common").Type<Partial<CreateNFTuniqueDto>>;
export declare class UpdateNFTuniqueDto extends UpdateNFTuniqueDto_base {
}
export declare class FilterNFTuniqueDto {
    limit: number;
    offset: number;
    minPrice: number;
    maxPrice: number;
}
export {};
