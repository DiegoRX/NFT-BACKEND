import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

import { Customer } from './customer.entity';
import { Exclude } from 'class-transformer';
import { NFT } from './nft.entity';
import { NFTUnique } from './uniqueNFT.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'varchar', length: 255, unique: true })
  walletAddress: string;
  @Column({ type: 'varchar', length: 255 })
  address: string;
  @Column({ type: 'varchar', length: 255 })
  phone: string;
  @Column({ type: 'varchar', length: 255 })
  city: string;
  @Column({ type: 'varchar', length: 255 })
  country: string;
  @Exclude()
  @Column({ type: 'varchar', length: 255 })
  password: string;
  @Column({ type: 'varchar' })
  role: string;
  @Exclude()
  @CreateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  @Exclude()
  @UpdateDateColumn({
    type: 'timestamptz',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
  @OneToOne(() => Customer, (customer) => customer.user, { nullable: true })
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @OneToMany(() => NFTUnique, (nft) => nft.user)
  nfts: NFTUnique[];
}
