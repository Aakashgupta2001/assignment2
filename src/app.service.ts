import { Injectable } from '@nestjs/common';
import { PositionDto } from './dto/position.dto';

@Injectable()
export class AppService {
  Position(input: PositionDto): string[] {
    console.log(input);
    const output = this.PossibleMoves(input.currentPosition);
    return output;
  }

  PossibleMoves(current_position: string): string[] {
    console.log(current_position);
    if (!/^[a-h][1-8]$/.test(current_position)) {
      // we need to throw the error here but i am returning it since i am not making an error handler for this task
      // throw new Error(
      //   "Invalid input format, please use format like 'a1' or 'h8'",
      // );
      return ['Invalid Input'];
    }
    const x = current_position.charCodeAt(0) - 97;
    const y = parseInt(current_position[1]) - 1;
    const moves = [];
    for (const [dx, dy] of [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ]) {
      if (0 <= x + dx && x + dx < 8 && 0 <= y + dy && y + dy < 8) {
        moves.push(String.fromCharCode(x + dx + 97) + (y + dy + 1));
      }
    }
    return moves;
  }
}
