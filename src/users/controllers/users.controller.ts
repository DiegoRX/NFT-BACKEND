import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';

import { UsersService } from '../services/users.service';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }
  @Get('/address/:id')
  getUserByWalletAddress(@Param('id') id: string) {
    return this.usersService.findOneByWalletAddress(id);
  }
  // @Get(':id/orders')
  // getOrders(@Param('id', ParseIntPipe) id: number) {
  //   return this.usersService.getOrderByUser(id);
  // }

  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }
  @Put(':id/nft/:nftId')
  addCategoryByProduct(
    @Param('id', ParseIntPipe) id: number,
    @Param('nftId', ParseIntPipe) nftId: number,
  ) {
    return this.usersService.addNftByUser(+id, nftId);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateUserDto,
  ) {
    return this.usersService.update(id, payload);
  }

  @Delete(':id/nft/:nftId')
  deleteCategory(
    @Param('id', ParseIntPipe) id: number,
    @Param('nftId', ParseIntPipe) nftId: number,
  ) {
    return this.usersService.removeNftByUser(id, nftId);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
