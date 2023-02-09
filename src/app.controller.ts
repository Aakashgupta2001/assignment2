import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { PositionDto } from './dto/position.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  Position(@Body() positionDTO: PositionDto): string[] {
    return this.appService.Position(positionDTO);
  }
}
