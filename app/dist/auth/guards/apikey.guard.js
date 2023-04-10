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
exports.ApikeyGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const public_decorators_1 = require("../decorators/public.decorators");
const config_1 = require("../../config");
let ApikeyGuard = class ApikeyGuard {
    constructor(configService, reflector) {
        this.configService = configService;
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.get(public_decorators_1.IS_PUBLIC_KEY, context.getHandler());
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const authHeader = request.header('Auth');
        const isAuth = authHeader === this.configService.apiKey;
        if (!isAuth) {
            throw new common_1.UnauthorizedException('not allowed');
        }
        return isAuth;
    }
};
ApikeyGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.default.KEY)),
    __metadata("design:paramtypes", [void 0, core_1.Reflector])
], ApikeyGuard);
exports.ApikeyGuard = ApikeyGuard;
//# sourceMappingURL=apikey.guard.js.map