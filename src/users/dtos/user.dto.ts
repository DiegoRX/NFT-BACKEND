import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsPositive,
  IsOptional,
  IsPhoneNumber,
  IsArray,
  ArrayMinSize,
  IsNumber,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'users email' })
  readonly email: string;
  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'users name' })
  readonly name: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'users address' })
  readonly address: string;

  @IsString()
  @ApiProperty({ description: 'users wallet address' })
  readonly walletAddress: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'users phone number' })
  readonly phone: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'users address' })
  readonly city: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'users address' })
  readonly country: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty()
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly role: string;

  @IsOptional()
  @IsPositive()
  @ApiProperty()
  readonly customerId: number;

  @ApiProperty()
  @IsArray()
  @IsOptional()
  @ArrayMinSize(0)
  @IsNumber({}, { each: true })
  readonly nftsIds: number[];
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
