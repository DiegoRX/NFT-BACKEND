import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  Index,
  JoinColumn,
} from 'typeorm';

import { NFT } from './nft.entity';
import { User } from './user.entity';

@Entity({ name: 'uniqueNFT' })
@Index(['address'])
export class NFTUnique {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  address: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;

  @ManyToOne(() => User, (user) => user.nfts)
  @JoinColumn({ name: 'user_id' })
  user: User;
  @ManyToOne(() => NFT, (nft) => nft.nfts)
  @JoinColumn({ name: 'nft_id' })
  nft: NFT;
}
