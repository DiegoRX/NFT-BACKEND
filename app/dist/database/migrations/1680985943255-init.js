"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1680985943255 = void 0;
class init1680985943255 {
    constructor() {
        this.name = 'init1680985943255';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "lastName" character varying(255) NOT NULL, "phone" character varying(255) NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, "walletAddress" character varying(255) NOT NULL, "address" character varying(255) NOT NULL, "phone" character varying(255) NOT NULL, "city" character varying(255) NOT NULL, "country" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "role" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "customer_id" integer, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_efbd1135797e451d834bcf88cd2" UNIQUE ("walletAddress"), CONSTRAINT "REL_d72eb2a5bbff4f2533a5d4caff" UNIQUE ("customer_id"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "uniqueNFT" ("id" SERIAL NOT NULL, "tokenUri" character varying(255) NOT NULL, "tokenId" integer NOT NULL, "address" character varying(255) NOT NULL, "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "update_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "user_id" integer, "nft_id" integer, CONSTRAINT "UQ_b7368ac78db71813a6d2303c6e7" UNIQUE ("tokenUri"), CONSTRAINT "UQ_b413b54c17525d86bceaef16004" UNIQUE ("tokenId"), CONSTRAINT "UQ_be4973ec852c02e46e090dbf4c9" UNIQUE ("address"), CONSTRAINT "PK_4a394796981c190616f3ab43bdd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_b7368ac78db71813a6d2303c6e" ON "uniqueNFT" ("tokenUri") `);
        await queryRunner.query(`CREATE TABLE "nft" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "address" character varying(255) NOT NULL, "description" text NOT NULL, "price" integer NOT NULL, "mintedNFT" integer NOT NULL, "image" character varying NOT NULL, "available" boolean NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "UQ_c0474ad6f2fa997086ca5fef159" UNIQUE ("name"), CONSTRAINT "UQ_dbb2a74b4722c05f9c0e89656a3" UNIQUE ("address"), CONSTRAINT "PK_8f46897c58e23b0e7bf6c8e56b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7ac8031f6f0e870c8522341fd0" ON "nft" ("price") `);
        await queryRunner.query(`CREATE INDEX "IDX_f61f77afe84cd31d45924b91ad" ON "nft" ("mintedNFT") `);
        await queryRunner.query(`CREATE INDEX "IDX_3f9f3b548bbaa765bf0666b059" ON "nft" ("name", "address") `);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_d72eb2a5bbff4f2533a5d4caff9" FOREIGN KEY ("customer_id") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "uniqueNFT" ADD CONSTRAINT "FK_174a3507c291818d39bf2ed048e" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "uniqueNFT" ADD CONSTRAINT "FK_3dd2927e1af26834a37040adcb0" FOREIGN KEY ("nft_id") REFERENCES "nft"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "uniqueNFT" DROP CONSTRAINT "FK_3dd2927e1af26834a37040adcb0"`);
        await queryRunner.query(`ALTER TABLE "uniqueNFT" DROP CONSTRAINT "FK_174a3507c291818d39bf2ed048e"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_d72eb2a5bbff4f2533a5d4caff9"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_3f9f3b548bbaa765bf0666b059"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f61f77afe84cd31d45924b91ad"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_7ac8031f6f0e870c8522341fd0"`);
        await queryRunner.query(`DROP TABLE "nft"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_b7368ac78db71813a6d2303c6e"`);
        await queryRunner.query(`DROP TABLE "uniqueNFT"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }
}
exports.init1680985943255 = init1680985943255;
//# sourceMappingURL=1680985943255-init.js.map