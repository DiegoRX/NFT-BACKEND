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
exports.NFTUnique = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const nft_entity_1 = require("./nft.entity");
const user_entity_1 = require("./user.entity");
let NFTUnique = class NFTUnique {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, tokenUri: { required: true, type: () => String }, tokenId: { required: true, type: () => Number }, address: { required: true, type: () => String }, createAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, user: { required: true, type: () => require("./user.entity").User }, nft: { required: true, type: () => require("./nft.entity").NFT } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NFTUnique.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], NFTUnique.prototype, "tokenUri", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', unique: true }),
    __metadata("design:type", Number)
], NFTUnique.prototype, "tokenId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, unique: true }),
    __metadata("design:type", String)
], NFTUnique.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'create_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], NFTUnique.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'update_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], NFTUnique.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.nfts),
    (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
    __metadata("design:type", user_entity_1.User)
], NFTUnique.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => nft_entity_1.NFT, (nft) => nft.nfts),
    (0, typeorm_1.JoinColumn)({ name: 'nft_id' }),
    __metadata("design:type", nft_entity_1.NFT)
], NFTUnique.prototype, "nft", void 0);
NFTUnique = __decorate([
    (0, typeorm_1.Entity)({ name: 'uniqueNFT' }),
    (0, typeorm_1.Index)(['tokenUri'])
], NFTUnique);
exports.NFTUnique = NFTUnique;
//# sourceMappingURL=uniqueNFT.entity.js.map