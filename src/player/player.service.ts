import { Injectable } from '@nestjs/common';
import { PlayerEntity } from './player.entity';
//----SERVICES----//
// TIPO DE PROVIDER-> INYECTABLE
// ACCESO A LA INFORMACION
// LIBERA Y AISLA LA LOGICA DE NEGOCIO
//FACILITA LA REUTILIZACION

// clases
// DESCARGAN Y CENTRALIZAN DE TAREAS
// SON UNO DE LOS TIPOS DE PROVIDERS

///--------PROVIDERS-----------///
//CONJUNTO DIVERSO DE CLASES
// SERVICCIOS, FACTORIAS, REPOSITORIOS
// PUEDEN SER INYECTADOS

///-------INYECCION DE DEPENDENCIAS -----///
//TECNICA OOP
//CREAR Y PROPORCIONAR INSTANCIAS
//FACILITA EL TESTING

@Injectable()
export class PlayerService {
  private players: PlayerEntity[] = [
    {
      id: 1,
      name: 'Lionel Messi',
      position: 'Delantero',
      equipo: 'Inter Miami',
      edad: 38,
    },
    {
      id: 2,
      name: 'Kylian Mbappé',
      position: 'Delantero',
      equipo: 'Real Madrid',
      edad: 27,
    },
    {
      id: 3,
      name: 'Jude Bellingham',
      position: 'Centrocampista',
      equipo: 'Real Madrid',
      edad: 22,
    },
    {
      id: 4,
      name: 'Erling Haaland',
      position: 'Delantero',
      equipo: 'Manchester City',
      edad: 25,
    },
    {
      id: 5,
      name: 'Virgil van Dijk',
      position: 'Defensa',
      equipo: 'Liverpool',
      edad: 34,
    },
    {
      id: 6,
      name: 'Pedri',
      position: 'Centrocampista',
      equipo: 'Barcelona',
      edad: 23,
    },
    {
      id: 7,
      name: 'Jan Oblak',
      position: 'Portero',
      equipo: 'Atlético de Madrid',
      edad: 33,
    },
    {
      id: 8,
      name: 'Rodri',
      position: 'Centrocampista',
      equipo: 'Manchester City',
      edad: 30,
    },
  ];

  getPlayers(): PlayerEntity[] {
    return this.players;
  }
  getPlayer(id): PlayerEntity | undefined {
    return this.players.find((p) => p.id == id);
  }

  createPlayer(player): PlayerEntity {
    this.players.push({
      id: this.players.length + 1,
      ...player,
    });
    return this.players[this.players.length - 1];
  }
}
