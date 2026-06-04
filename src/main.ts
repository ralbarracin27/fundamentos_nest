import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//AppModule => modulo raiz de la app
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
