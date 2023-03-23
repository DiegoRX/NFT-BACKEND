import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CustomerController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { Customer } from './entities/customer.entity';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';

import { NftController } from './controllers/nft.controller';
import { NftService } from './services/nft.service';
import { NFT } from './entities/nft.entity';
import { UniqueNftController } from './controllers/unique-nft.controller';
import { UniqueNftService } from './services/unique-nft.service';
import { NFTUnique } from './entities/uniqueNFT.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Customer, NFT, NFTUnique])],
  controllers: [
    CustomerController,
    UsersController,
    NftController,
    UniqueNftController,
  ],
  providers: [CustomersService, UsersService, NftService, UniqueNftService],
  exports: [UsersService],
})
export class UsersModule {}
