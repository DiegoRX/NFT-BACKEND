import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NFT } from '../entities/nft.entity';
import { Between, Repository } from 'typeorm';
import { CreateNFTDto, UpdateNFTDto } from '../dtos/nft.dto';
import { NFTUnique } from '../entities/uniqueNFT.entity';
import { User } from '../entities/user.entity';
import {
  CreateNFTuniqueDto,
  FilterNFTuniqueDto,
  UpdateNFTuniqueDto,
} from '../dtos/uniqueNFT.dto';

@Injectable()
export class UniqueNftService {
  constructor(
    @InjectRepository(NFTUnique) private NFTUniqueRepo: Repository<NFTUnique>,
    @InjectRepository(NFT) private NFTRepo: Repository<NFT>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}
  findAll() {
    return this.NFTUniqueRepo.find({
      relations: ['user', 'nft'],
    });
  }

  async findOne(id: number) {
    const NFTUnique = await this.NFTUniqueRepo.findOne({
      relations: ['users', 'nft'],
      where: { id },
    });
    if (!NFTUnique) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return NFTUnique;
  }

  async create(data: CreateNFTuniqueDto) {
    const newNFTUnique = this.NFTUniqueRepo.create(data);
    if (data.nftId) {
      const nft = await this.NFTRepo.findOneBy({ id: data.nftId });
      newNFTUnique.nft = nft;
    }
    if (data.userId) {
      const user = await this.userRepo.findOneBy({ id: data.userId });
      newNFTUnique.user = user;
    }
    return this.NFTUniqueRepo.save(newNFTUnique);
  }

  async update(id: number, changes: UpdateNFTuniqueDto) {
    const NFTUnique = await this.NFTUniqueRepo.findOneBy({ id });
    if (changes.nftId) {
      const nft = await this.NFTRepo.findOneBy({ id: changes.nftId });
      NFTUnique.nft = nft;
    }
    if (changes.userId) {
      const user = await this.userRepo.findOneBy({ id: changes.userId });
      NFTUnique.user = user;
    }
    this.NFTUniqueRepo.merge(NFTUnique, changes);
    return this.NFTUniqueRepo.save(NFTUnique);
  }

  remove(id: number) {
    return this.NFTUniqueRepo.delete(id);
  }
}
