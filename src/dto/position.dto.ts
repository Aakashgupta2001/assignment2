import { IsNotEmpty, IsOptional } from 'class-validator';

export class PositionDto {
  @IsNotEmpty()
  currentPosition: string;
}
