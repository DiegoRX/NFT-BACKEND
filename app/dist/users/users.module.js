"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customers_controller_1 = require("./controllers/customers.controller");
const customers_service_1 = require("./services/customers.service");
const customer_entity_1 = require("./entities/customer.entity");
const users_controller_1 = require("./controllers/users.controller");
const users_service_1 = require("./services/users.service");
const user_entity_1 = require("./entities/user.entity");
const nft_controller_1 = require("./controllers/nft.controller");
const nft_service_1 = require("./services/nft.service");
const nft_entity_1 = require("./entities/nft.entity");
const unique_nft_controller_1 = require("./controllers/unique-nft.controller");
const unique_nft_service_1 = require("./services/unique-nft.service");
const uniqueNFT_entity_1 = require("./entities/uniqueNFT.entity");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([user_entity_1.User, customer_entity_1.Customer, nft_entity_1.NFT, uniqueNFT_entity_1.NFTUnique])],
        controllers: [
            customers_controller_1.CustomerController,
            users_controller_1.UsersController,
            nft_controller_1.NftController,
            unique_nft_controller_1.UniqueNftController,
        ],
        providers: [customers_service_1.CustomersService, users_service_1.UsersService, nft_service_1.NftService, unique_nft_service_1.UniqueNftService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map