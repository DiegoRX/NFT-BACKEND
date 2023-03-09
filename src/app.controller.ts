import {
  Controller,
  Get,
  Param,
  Query,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ApikeyGuard } from './auth/guards/apikey.guard';
import { Public } from './auth/decorators/public.decorators';

@UseGuards(ApikeyGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Public()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('nuevo')
  newEndpoint() {
    return 'yo soy nuevo';
  }

  @Get('/tasks/')
  task() {
    return this.appService.getTasks();
  }
}
