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

@Module({
  imports: [TypeOrmModule.forFeature([User, Customer, NFT])],
  controllers: [CustomerController, UsersController, NftController],
  providers: [CustomersService, UsersService, NftService],
  exports: [UsersService],
})
export class UsersModule {}
