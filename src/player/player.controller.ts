import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlayerService } from './player.service';
import { PlayerEntity } from './player.entity';
//ESTE CONTROLADOR DEPENDE DE PLAYER
@Controller('player')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get()
  getAll(): PlayerEntity[] {
    return this.playerService.getPlayers();
  }
  @Get(':id')
  getPlayer(@Param('id') id): PlayerEntity {
    return this.playerService.getPlayer(id)!;
  }

  //VIP => ParseIntPipe se encarga de informar a nest que se requiere un id num entero
  // @Get(':id')
  // getPlayer(@Param('id', ParseIntPipe) id): PlayerEntity {
  //   return this.playerService.getPlayer(id)!;
  // }

  //envia un post por la ruta raiz del controlador @Controller('player')
  @Post()
  createPlayer(@Body() data) {
    //return `Crear un jugador : ${data.name} - Juega de ${data.position}`;
    return this.playerService.createPlayer(data);
  }
}
