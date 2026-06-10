import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerController } from './player/player.controller';
import { PlayerService } from './player/player.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { GameModule } from './game/game.module';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';

//decorador @module

@Module({
  imports: [UsersModule, GameModule],
  controllers: [AppController, PlayerController, UsersController, GameController],
  providers: [AppService, PlayerService, UsersService, GameService],
})
export class AppModule { }
