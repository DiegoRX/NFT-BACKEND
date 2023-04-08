import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsUrl,
  ArrayMinSize,
  IsArray,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateNFTDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `NFT's name` })
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `NFT's address` })
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  readonly price: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  readonly mintedNFT: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly available: boolean;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @ArrayMinSize(0)
  @IsNumber({}, { each: true })
  readonly usersIds: number[];
}

export class UpdateNFTDto extends PartialType(CreateNFTDto) {}
