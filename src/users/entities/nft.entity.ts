import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  Index,
  JoinColumn,
  OneToMany,
} from 'typeorm';

import { User } from 'src/users/entities/user.entity';
import { NFTUnique } from './uniqueNFT.entity';
@Entity({ name: 'nft' })
@Index(['name', 'address'])
export class NFT {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  address: string;

  @Column({ type: 'text' })
  description: string;

  @Index()
  @Column({ type: 'int' })
  price: number;

  @Index()
  @Column({ type: 'int' })
  mintedNFT: number;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'bool' })
  available: boolean;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
  @OneToMany(() => NFTUnique, (nftUnique) => nftUnique.nft)
  nfts: NFTUnique[];
}
