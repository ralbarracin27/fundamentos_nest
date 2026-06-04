import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //metodos http se debe usar @GET
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('dos')
  getDos(): string {
    return 'PROBANDO RUTA DOS';
  }

  @Get('tres')
  getTres(): string {
    return 'probando 3';
  }
  //ojo aqui!!!
  //importante
  @Get('producto/:id')
  getProducto(@Param() params: { id: string }): string {
    return `el producto es: ...${params.id}`;
  }
  @Get('buscar/:query/:page')
  getBuscarPag(@Param() pepe: string): string {
    //return `Buscar: ${pepe.query} - Pagina: ${pepe.page}`
    //ME DEVUELVE LOS DATOS EN CRUDO JSON
    return pepe;
  }

  @Get('buscar/:query/:page/:limit')
  getBuscarPagLimit(
    @Param('query') query,
    @Param('page') page,
    @Param('limit') limit,
  ): string {
    return `Buscar: ${query} - Pagina: ${page} - LIMITE: ${limit}`;
  }
}
