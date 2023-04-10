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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcrypt");
const user_entity_1 = require("../entities/user.entity");
const nft_entity_1 = require("../entities/nft.entity");
const customers_service_1 = require("./customers.service");
let UsersService = class UsersService {
    constructor(configService, userRepo, nftRepo, customersService) {
        this.configService = configService;
        this.userRepo = userRepo;
        this.nftRepo = nftRepo;
        this.customersService = customersService;
    }
    findAll() {
        return this.userRepo.find({
            relations: ['nfts'],
        });
    }
    async findOne(id) {
        const user = await this.userRepo.findOne({
            relations: ['nfts'],
            where: {
                id,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User #${id} not found`);
        }
        return user;
    }
    async findOneByWalletAddress(walletAddress) {
        const user = await this.userRepo.findOneBy({ walletAddress });
        if (!user) {
            throw new common_1.NotFoundException(`User #${walletAddress} not found`);
        }
        return user;
    }
    findByEmail(email) {
        return this.userRepo.findOneBy({ email });
    }
    async create(data) {
        const newUser = this.userRepo.create(data);
        const hashPasword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashPasword;
        if (data.customerId) {
            const customer = await this.customersService.findOne(data.customerId);
            newUser.customer = customer;
        }
        return this.userRepo.save(newUser);
    }
    async update(id, changes) {
        const user = await this.userRepo.findOneBy({ id });
        if (changes.nftsIds) {
            const nft = await this.nftRepo.findBy({
                id: (0, typeorm_2.In)(changes.nftsIds),
            });
        }
        this.userRepo.merge(user, changes);
        return this.userRepo.save(user);
    }
    remove(id) {
        return this.userRepo.delete(id);
    }
    async addNftByUser(userId, nftId) {
        const user = await this.userRepo.findOne({
            relations: ['nfts'],
            where: {
                id: userId,
            },
        });
        const nft = await this.nftRepo.findOneBy({ id: nftId });
        this.userRepo.merge(user, nft);
        return this.userRepo.save(user);
    }
    async removeNftByUser(userId, nftId) {
        const user = await this.userRepo.findOne({
            relations: ['nfts'],
            where: {
                id: userId,
            },
        });
        user.nfts = user.nfts.filter((item) => item.id !== nftId);
        return this.userRepo.save(user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(nft_entity_1.NFT)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        customers_service_1.CustomersService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map