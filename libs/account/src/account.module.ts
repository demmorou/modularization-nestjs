import { Module } from '@nestjs/common';
import { AccountInfraModule } from './infra/infra.module';
import { AccountPresentationModule } from './presentation/presentation.module';
import { MainModule } from './main/main.module';

@Module({
  imports: [AccountInfraModule, AccountPresentationModule, MainModule],
  providers: [],
})
export class AccountModule {}
