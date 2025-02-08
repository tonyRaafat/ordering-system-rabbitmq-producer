/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsHexadecimal } from 'class-validator';

export class FindOrderByIdDto {
  @IsHexadecimal()
  id: string;
}
