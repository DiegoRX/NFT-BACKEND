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
} from 'typeorm';

import { Customer } from './customer.entity';
import { Exclude } from 'class-transformer';
import { NFT } from './nft.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;
  @Column({ type: 'varchar', length: 255 })
  name: string;
  @Column({ type: 'varchar', length: 255 })
  walletAddress: string;
  @Column({ type: 'varchar', length: 255, unique: true })
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

  @ManyToMany(() => NFT, (nft) => nft.users)
  @JoinTable({
    name: 'users_has_nfts',
    joinColumn: {
      name: 'user_id',
    },
    inverseJoinColumn: {
      name: 'nft_id',
    },
  })
  nfts: NFT[];
}
