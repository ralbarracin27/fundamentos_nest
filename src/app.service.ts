import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello RUTH!';
  }
}

//npm run start:dev
