import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerController } from './player/player.controller';
import { PlayerService } from './player/player.service';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

//decorador @module

@Module({
  imports: [UsersModule],
  controllers: [AppController, PlayerController, UsersController],
  providers: [AppService, PlayerService, UsersService],
})
export class AppModule {}
