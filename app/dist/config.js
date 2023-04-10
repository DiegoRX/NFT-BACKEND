"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('config', () => {
    return {
        database: {
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT,
        },
        postgresUrl: process.env.DATABASE_URL,
        apiKey: process.env.API_KEY,
        jwtSecret: process.env.JWT_SECRET,
    };
});
//# sourceMappingURL=config.js.map