import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive } from 'class-validator';
import { Entity } from 'typeorm';
@Entity()
export class CreateOrderDto {
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly customerId: number;
}
export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
