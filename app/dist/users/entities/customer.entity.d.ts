import { User } from './user.entity';
export declare class Customer {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
}
