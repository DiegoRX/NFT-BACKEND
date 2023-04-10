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
exports.NftService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const nft_entity_1 = require("../entities/nft.entity");
const typeorm_2 = require("typeorm");
let NftService = class NftService {
    constructor(nftRepo) {
        this.nftRepo = nftRepo;
    }
    findAll() {
        return this.nftRepo.find({
            relations: ['nfts', 'nfts.user'],
        });
    }
    findAllWithUser() {
        return this.nftRepo.find({
            relations: ['nfts'],
        });
    }
    async findOne(name) {
        const nft = await this.nftRepo.findOne({
            relations: ['nfts'],
            where: {
                name,
            },
        });
        if (!nft) {
            throw new common_1.NotFoundException(`NFT ${name} not found`);
        }
        return nft;
    }
    create(data) {
        const newNFT = this.nftRepo.create(data);
        return this.nftRepo.save(newNFT);
    }
    async update(id, changes) {
        const nft = await this.nftRepo.findOneBy({ id });
        this.nftRepo.merge(nft, changes);
        return this.nftRepo.save(nft);
    }
    remove(id) {
        return this.nftRepo.delete(id);
    }
};
NftService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nft_entity_1.NFT)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NftService);
exports.NftService = NftService;
//# sourceMappingURL=nft.service.js.map