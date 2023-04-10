import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
export declare class ApikeyGuard implements CanActivate {
    private configService;
    private reflector;
    constructor(configService: ConfigType<typeof config>, reflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
