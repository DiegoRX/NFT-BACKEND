export declare class CreateUserDto {
    readonly email: string;
    readonly name: string;
    readonly address: string;
    readonly walletAddress: string;
    readonly phone: string;
    readonly city: string;
    readonly country: string;
    readonly password: string;
    readonly role: string;
    readonly customerId: number;
    readonly nftsIds: number[];
}
declare const UpdateUserDto_base: import("@nestjs/common").Type<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
