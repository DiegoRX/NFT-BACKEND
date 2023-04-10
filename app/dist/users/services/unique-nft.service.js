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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueNftService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nft_entity_1 = require("../entities/nft.entity");
const typeorm_2 = require("typeorm");
const uniqueNFT_entity_1 = require("../entities/uniqueNFT.entity");
const user_entity_1 = require("../entities/user.entity");
let UniqueNftService = class UniqueNftService {
    constructor(NFTUniqueRepo, NFTRepo, userRepo) {
        this.NFTUniqueRepo = NFTUniqueRepo;
        this.NFTRepo = NFTRepo;
        this.userRepo = userRepo;
    }
    findAll() {
        return this.NFTUniqueRepo.find({
            relations: ['user', 'nft'],
        });
    }
    async findOne(tokenId) {
        const NFTUnique = await this.NFTUniqueRepo.findOne({
            relations: ['user', 'nft'],
            where: { tokenId },
        });
        if (!NFTUnique) {
            throw new common_1.NotFoundException(`Product #${tokenId} not found`);
        }
        return NFTUnique;
    }
    async create(data) {
        const newNFTUnique = this.NFTUniqueRepo.create(data);
        if (data.nftId) {
            const nft = await this.NFTRepo.findOneBy({ id: data.nftId });
            newNFTUnique.nft = nft;
        }
        if (data.userId) {
            const user = await this.userRepo.findOneBy({ id: data.userId });
            newNFTUnique.user = user;
        }
        return this.NFTUniqueRepo.save(newNFTUnique);
    }
    async update(tokenId, changes) {
        const NFTUnique = await this.NFTUniqueRepo.findOneBy({ tokenId });
        if (changes.nftId) {
            const nft = await this.NFTRepo.findOneBy({ id: changes.nftId });
            NFTUnique.nft = nft;
        }
        if (changes.userId) {
            const user = await this.userRepo.findOneBy({ id: changes.userId });
            NFTUnique.user = user;
        }
        this.NFTUniqueRepo.merge(NFTUnique, changes);
        return this.NFTUniqueRepo.save(NFTUnique);
    }
    remove(tokenId) {
        return this.NFTUniqueRepo.delete(tokenId);
    }
};
UniqueNftService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(uniqueNFT_entity_1.NFTUnique)),
    __param(1, (0, typeorm_1.InjectRepository)(nft_entity_1.NFT)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UniqueNftService);
exports.UniqueNftService = UniqueNftService;
//# sourceMappingURL=unique-nft.service.js.map