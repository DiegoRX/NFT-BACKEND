export declare class CreateNFTDto {
    readonly name: string;
    readonly address: string;
    readonly description: string;
    readonly price: number;
    readonly mintedNFT: number;
    readonly image: string;
    readonly available: boolean;
    readonly usersIds: number[];
}
declare const UpdateNFTDto_base: import("@nestjs/common").Type<Partial<CreateNFTDto>>;
export declare class UpdateNFTDto extends UpdateNFTDto_base {
}
export {};
