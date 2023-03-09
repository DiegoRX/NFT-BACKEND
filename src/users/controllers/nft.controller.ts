import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { NftService } from '../services/nft.service';
import { CreateNFTDto, UpdateNFTDto } from '../dtos/nft.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Public } from 'src/auth/decorators/public.decorators';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/roles.models';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('nft')
export class NftController {
  constructor(private NFTService: NftService) {}

  @Roles(Role.ADMIN)
  @Get('users')
  findAllWithUsers() {
    return this.NFTService.findAllWithUser();
  }
  @Public()
  @Get()
  findAll() {
    return this.NFTService.findAll();
  }
  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.NFTService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateNFTDto) {
    return this.NFTService.create(payload);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateNFTDto) {
    return this.NFTService.update(id, payload);
  }
  @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.NFTService.remove(+id);
  }
}
