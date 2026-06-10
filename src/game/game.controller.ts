import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
    constructor(private readonly gameService: GameService) { }

    @Post('score')
    add(@Body() data) {
        return this.gameService.addNumber(data.value);
    }

    @Get('score')
    get() {
        return this.gameService.getNumbers();
    }
}