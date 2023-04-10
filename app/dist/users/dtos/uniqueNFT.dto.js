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
exports.FilterNFTuniqueDto = exports.UpdateNFTuniqueDto = exports.CreateNFTuniqueDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateNFTuniqueDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { tokenUri: { required: true, type: () => String }, address: { required: true, type: () => String }, tokenId: { required: true, type: () => Number, minimum: 1 }, userId: { required: true, type: () => Number, minimum: 1 }, nftId: { required: true, type: () => Number, minimum: 1 } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ description: 'tokenUri' }),
    __metadata("design:type", String)
], CreateNFTuniqueDto.prototype, "tokenUri", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'address' }),
    __metadata("design:type", String)
], CreateNFTuniqueDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateNFTuniqueDto.prototype, "tokenId", void 0);
__decorate([
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateNFTuniqueDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], CreateNFTuniqueDto.prototype, "nftId", void 0);
exports.CreateNFTuniqueDto = CreateNFTuniqueDto;
class UpdateNFTuniqueDto extends (0, swagger_1.PartialType)(CreateNFTuniqueDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateNFTuniqueDto = UpdateNFTuniqueDto;
class FilterNFTuniqueDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { limit: { required: true, type: () => Number, minimum: 1 }, offset: { required: true, type: () => Number, minimum: 0 }, minPrice: { required: true, type: () => Number, minimum: 1 }, maxPrice: { required: true, type: () => Number, minimum: 1 } };
    }
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], FilterNFTuniqueDto.prototype, "limit", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], FilterNFTuniqueDto.prototype, "offset", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], FilterNFTuniqueDto.prototype, "minPrice", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((item) => item.minPrice),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], FilterNFTuniqueDto.prototype, "maxPrice", void 0);
exports.FilterNFTuniqueDto = FilterNFTuniqueDto;
//# sourceMappingURL=uniqueNFT.dto.js.map