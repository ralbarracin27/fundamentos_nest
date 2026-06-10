import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('score')
  add(@Body() data: { score: number }) {
    return this.gameService.addNumber(data.score);
  }

  @Get('score')
  get() {
    return this.gameService.getNumbers();
  }
}
