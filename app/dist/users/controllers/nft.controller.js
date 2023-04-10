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
exports.NftController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const nft_service_1 = require("../services/nft.service");
const nft_dto_1 = require("../dtos/nft.dto");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const public_decorators_1 = require("../../auth/decorators/public.decorators");
const roles_decorator_1 = require("../../auth/decorators/roles.decorator");
const roles_models_1 = require("../../auth/models/roles.models");
let NftController = class NftController {
    constructor(NFTService) {
        this.NFTService = NFTService;
    }
    findAllWithUsers() {
        return this.NFTService.findAllWithUser();
    }
    findAll() {
        return this.NFTService.findAll();
    }
    get(name) {
        return this.NFTService.findOne(name);
    }
    create(payload) {
        return this.NFTService.create(payload);
    }
    update(id, payload) {
        return this.NFTService.update(id, payload);
    }
    remove(id) {
        return this.NFTService.remove(+id);
    }
};
__decorate([
    (0, roles_decorator_1.Roles)(roles_models_1.Role.ADMIN),
    (0, common_1.Get)('users'),
    openapi.ApiResponse({ status: 200, type: [require("../entities/nft.entity").NFT] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NftController.prototype, "findAllWithUsers", null);
__decorate([
    (0, public_decorators_1.Public)(),
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("../entities/nft.entity").NFT] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NftController.prototype, "findAll", null);
__decorate([
    (0, public_decorators_1.Public)(),
    (0, common_1.Get)(':name'),
    openapi.ApiResponse({ status: 200, type: require("../entities/nft.entity").NFT }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], NftController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../entities/nft.entity").NFT }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nft_dto_1.CreateNFTDto]),
    __metadata("design:returntype", void 0)
], NftController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/nft.entity").NFT }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, nft_dto_1.UpdateNFTDto]),
    __metadata("design:returntype", void 0)
], NftController.prototype, "update", null);
__decorate([
    (0, roles_decorator_1.Roles)(roles_models_1.Role.ADMIN),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], NftController.prototype, "remove", null);
NftController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, common_1.Controller)('nft'),
    __metadata("design:paramtypes", [nft_service_1.NftService])
], NftController);
exports.NftController = NftController;
//# sourceMappingURL=nft.controller.js.map