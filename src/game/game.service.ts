import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
    private numbers: number[] = [];

    addNumber(value: number): number[] {
        this.numbers.push(value);
        return this.numbers;
    }

    getNumbers(): number[] {
        return this.numbers;
    }
}
