import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  IsOptional,
  Min,
  ValidateIf,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateNFTuniqueDto {
  @IsString()
  @ApiProperty({ description: 'NFT address' })
  readonly address: string;

  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly userId: number;
  @IsPositive()
  @IsNotEmpty()
  @ApiProperty()
  readonly nftId: number;
}

export class UpdateNFTuniqueDto extends PartialType(CreateNFTuniqueDto) {}

export class FilterNFTuniqueDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;

  @IsOptional()
  @IsPositive()
  minPrice: number;

  @ValidateIf((item) => item.minPrice)
  @IsPositive()
  maxPrice: number;
}
