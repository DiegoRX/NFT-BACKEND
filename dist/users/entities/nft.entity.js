"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NFT = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const uniqueNFT_entity_1 = require("./uniqueNFT.entity");
let NFT = class NFT {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, address: { required: true, type: () => String }, description: { required: true, type: () => String }, price: { required: true, type: () => Number }, mintedNFT: { required: true, type: () => Number }, image: { required: true, type: () => String }, available: { required: true, type: () => Boolean }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, nfts: { required: true, type: () => [require("./uniqueNFT.entity").NFTUnique] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NFT.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], NFT.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], NFT.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], NFT.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], NFT.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], NFT.prototype, "mintedNFT", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], NFT.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bool' }),
    __metadata("design:type", Boolean)
], NFT.prototype, "available", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], NFT.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], NFT.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => uniqueNFT_entity_1.NFTUnique, (nftUnique) => nftUnique.nft),
    __metadata("design:type", Array)
], NFT.prototype, "nfts", void 0);
NFT = __decorate([
    (0, typeorm_1.Entity)({ name: 'nft' }),
    (0, typeorm_1.Index)(['name', 'address'])
], NFT);
exports.NFT = NFT;
//# sourceMappingURL=nft.entity.js.map