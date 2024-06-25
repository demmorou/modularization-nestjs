import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';

export class ConflictResponse {
  @ApiProperty({ example: HttpStatus.CONFLICT })
  statusCode: number;

  @ApiProperty({ example: 'Conflict' })
  message: string;

  @ApiProperty({ example: 'This operation is conflicting' })
  error: string;
}
