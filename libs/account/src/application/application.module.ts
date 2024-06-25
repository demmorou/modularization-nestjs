import { Module } from '@nestjs/common';
import { ImplGetAccountUseCase } from './use-cases/get-account.impl';
import { AccountInfraModule } from '../infra/infra.module';

@Module({
  imports: [AccountInfraModule],
  providers: [{ provide: 'GetAccount', useClass: ImplGetAccountUseCase }],
  exports: ['GetAccount'],
})
export class AccountApplicationModule {}
