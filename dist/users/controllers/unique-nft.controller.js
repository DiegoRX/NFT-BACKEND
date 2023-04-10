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
exports.UniqueNftController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const parse_int_pipe_1 = require("../../common/parse-int.pipe");
const uniqueNFT_dto_1 = require("../dtos/uniqueNFT.dto");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const roles_guard_1 = require("../../auth/guards/roles.guard");
const public_decorators_1 = require("../../auth/decorators/public.decorators");
const unique_nft_service_1 = require("../services/unique-nft.service");
let UniqueNftController = class UniqueNftController {
    constructor(uniqueNftService) {
        this.uniqueNftService = uniqueNftService;
    }
    getUniqueNfts() {
        return this.uniqueNftService.findAll();
    }
    getProductFilter() {
        return `yo soy un filter`;
    }
    getOne(productId) {
        return this.uniqueNftService.findOne(productId);
    }
    create(payload) {
        return this.uniqueNftService.create(payload);
    }
    update(id, payload) {
        return this.uniqueNftService.update(id, payload);
    }
    delete(id) {
        return this.uniqueNftService.remove(id);
    }
};
__decorate([
    (0, public_decorators_1.Public)(),
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'List of products' }),
    openapi.ApiResponse({ status: 200, type: [require("../entities/uniqueNFT.entity").NFTUnique] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UniqueNftController.prototype, "getUniqueNfts", null);
__decorate([
    (0, common_1.Get)('filter'),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UniqueNftController.prototype, "getProductFilter", null);
__decorate([
    (0, public_decorators_1.Public)(),
    (0, common_1.Get)(':productId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.ACCEPTED),
    openapi.ApiResponse({ status: common_1.HttpStatus.ACCEPTED, type: require("../entities/uniqueNFT.entity").NFTUnique }),
    __param(0, (0, common_1.Param)('productId', parse_int_pipe_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UniqueNftController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("../entities/uniqueNFT.entity").NFTUnique }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [uniqueNFT_dto_1.CreateNFTuniqueDto]),
    __metadata("design:returntype", void 0)
], UniqueNftController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    openapi.ApiResponse({ status: 200, type: require("../entities/uniqueNFT.entity").NFTUnique }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, uniqueNFT_dto_1.UpdateNFTuniqueDto]),
    __metadata("design:returntype", void 0)
], UniqueNftController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UniqueNftController.prototype, "delete", null);
UniqueNftController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, swagger_1.ApiTags)('products'),
    (0, common_1.Controller)('unique-nft'),
    __metadata("design:paramtypes", [unique_nft_service_1.UniqueNftService])
], UniqueNftController);
exports.UniqueNftController = UniqueNftController;
//# sourceMappingURL=unique-nft.controller.js.map