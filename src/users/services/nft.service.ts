import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NFT } from '../entities/nft.entity';
import { Repository } from 'typeorm';
import { CreateNFTDto, UpdateNFTDto } from '../dtos/nft.dto';

@Injectable()
export class NftService {
  constructor(@InjectRepository(NFT) private nftRepo: Repository<NFT>) {}

  findAll() {
    return this.nftRepo.find();
  }
  findAllWithUser() {
    return this.nftRepo.find({
      relations: ['users'],
    });
  }
  async findOne(id: number) {
    const nft = await this.nftRepo.findOne({
      relations: ['users'],
      where: {
        id,
      },
    });
    if (!nft) {
      throw new NotFoundException(`NFT #${id} not found`);
    }
    return nft;
  }

  create(data: CreateNFTDto) {
    const newNFT = this.nftRepo.create(data);
    return this.nftRepo.save(newNFT);
  }

  async update(id: number, changes: UpdateNFTDto) {
    const nft = await this.nftRepo.findOneBy({ id });
    this.nftRepo.merge(nft, changes);
    return this.nftRepo.save(nft);
  }

  remove(id: number) {
    return this.nftRepo.delete(id);
  }
}
