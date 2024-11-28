import { AccountApplicationModule } from '@app/account/application/application.module';
import { Module } from '@nestjs/common';
import { GetAccountResolver } from './get-account.resolver';

@Module({
  imports: [AccountApplicationModule],
  providers: [GetAccountResolver],
  exports: [GetAccountResolver],
})
export class ResolversModule {}
