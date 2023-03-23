import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  UseGuards,
  // ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ParseIntPipe } from '../../common/parse-int.pipe';
import {
  CreateNFTuniqueDto,
  UpdateNFTuniqueDto,
  FilterNFTuniqueDto,
} from '../dtos/uniqueNFT.dto';

import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Public } from 'src/auth/decorators/public.decorators';
import { Roles } from '../../auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/roles.models';
import { UniqueNftService } from '../services/unique-nft.service';

@UseGuards(JwtAuthGuard, RolesGuard)
@ApiTags('products')
@Controller('unique-nft')
export class UniqueNftController {
  constructor(private uniqueNftService: UniqueNftService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'List of products' })
  getUniqueNfts() {
    return this.uniqueNftService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Public()
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.uniqueNftService.findOne(productId);
  }

  // @Roles(Role.ADMIN)
  @Post()
  create(@Body() payload: CreateNFTuniqueDto) {
    return this.uniqueNftService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateNFTuniqueDto) {
    return this.uniqueNftService.update(id, payload);
  }

  // @Put(':id/category/:categoryId')
  // addCategoryToProduct(
  //   @Param('id') id: number,
  //   @Param('categoryId', ParseIntPipe) categoryId: number,
  // ) {
  //   return this.uniqueNftService.addCategoryToProduct(id, categoryId);
  // }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.uniqueNftService.remove(id);
  }

  // @Delete(':id/category/:categoryId')
  // deleteCategory(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Param('categoryId', ParseIntPipe) categoryId: number,
  // ) {
  //   return this.uniqueNftService.removeCategoryByProduct(id, categoryId);
  // }
}
