import { ConfigType } from '@nestjs/config';
import config from './config';
import { Client } from 'pg';
export declare class AppService {
    private clientPg;
    private tasks;
    private configService;
    constructor(clientPg: Client, tasks: any[], configService: ConfigType<typeof config>);
    getHello(): string;
    getTasks(): Promise<unknown>;
}
