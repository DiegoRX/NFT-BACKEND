import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '../entities/user.entity';

import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

import { NFT } from '../entities/nft.entity';
import { CustomersService } from './customers.service';

@Injectable()
export class UsersService {
  constructor(
    private configService: ConfigService,
    @InjectRepository(User) private userRepo: Repository<User>,
    @InjectRepository(NFT) private nftRepo: Repository<NFT>,
    private customersService: CustomersService,
  ) {}

  findAll() {
    return this.userRepo.find({
      relations: ['nfts'],
    });
  }
  async findOne(id: number) {
    const user = await this.userRepo.findOne({
      relations: ['nfts'],
      where: {
        id,
      },
    });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }
  async findOneByWalletAddress(walletAddress: string) {
    const user = await this.userRepo.findOneBy({ walletAddress });
    if (!user) {
      throw new NotFoundException(`User #${walletAddress} not found`);
    }
    return user;
  }

  findByEmail(email: string) {
    return this.userRepo.findOneBy({ email });
  }

  async create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    const hashPasword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPasword;
    if (data.customerId) {
      const customer = await this.customersService.findOne(data.customerId);
      newUser.customer = customer;
    }
    return this.userRepo.save(newUser);
  }

  async update(id: number, changes: UpdateUserDto) {
    const user = await this.userRepo.findOneBy({ id });
    if (changes.nftsIds) {
      const nft = await this.nftRepo.findBy({
        id: In(changes.nftsIds),
      });
      // user.nfts = nft;
    }
    this.userRepo.merge(user, changes);
    return this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }

  async addNftByUser(userId: number, nftId: number) {
    const user = await this.userRepo.findOne({
      relations: ['nfts'],
      where: {
        id: userId,
      },
    });
    const nft = await this.nftRepo.findOneBy({ id: nftId });
    this.userRepo.merge(user, nft);
    return this.userRepo.save(user);
  }

  async removeNftByUser(userId: number, nftId: number) {
    const user = await this.userRepo.findOne({
      relations: ['nfts'],
      where: {
        id: userId,
      },
    });
    user.nfts = user.nfts.filter((item) => item.id !== nftId);
    return this.userRepo.save(user);
  }

  // async getOrderByUser(id: number) {
  //   const user = this.findOne(id);
  //   return {
  //     date: new Date(),
  //     user,
  //     users: await this.usersService.findAll(),
  //   };
  // }
}
