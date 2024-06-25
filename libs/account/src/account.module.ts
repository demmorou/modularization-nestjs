import { Module } from '@nestjs/common';
import { AccountInfraModule } from './infra/infra.module';
import { AccountPresentationModule } from './presentation/presentation.module';

@Module({
  imports: [AccountInfraModule, AccountPresentationModule],
  providers: [],
})
export class AccountModule {}
