import { Module } from '@nestjs/common';
import { AccountModule } from '@app/account';

@Module({
  imports: [AccountModule],
})
export class MainModule {}
