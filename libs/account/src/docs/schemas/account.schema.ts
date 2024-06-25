import { ApiProperty } from '@nestjs/swagger';

export class AccountSchema {
  @ApiProperty({
    description: 'uuid account',
    example: '1144031d-8bd3-4b54-8876-69611f7ad69d',
  })
  id: string;

  @ApiProperty({ description: 'account username', example: 'john_doe' })
  username: string;

  @ApiProperty({ description: 'First name', example: 'John' })
  firstName: string;

  @ApiProperty({ description: 'Last name', example: 'Doe' })
  lastName: string;

  @ApiProperty({
    description: 'Last login',
    example: '2024-04-06T12:12:12.999',
  })
  lastLogin: string;
}
