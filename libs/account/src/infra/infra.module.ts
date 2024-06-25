import { Global, Module } from '@nestjs/common';

import { accountDataSource } from './database/datasource';
import { ImplAccountRepository } from './database/repositories/account.repository.impl';

@Global()
@Module({
  providers: [
    { provide: 'AccountDataSource', useValue: accountDataSource },
    { provide: 'AccountRepository', useClass: ImplAccountRepository },
  ],
  exports: ['AccountRepository'],
})
export class AccountInfraModule {}
