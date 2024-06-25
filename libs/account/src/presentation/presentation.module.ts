import { Module } from '@nestjs/common';
import { GetAccountController } from './controllers/get-account.controller';
import { AccountApplicationModule } from '../application/application.module';
import { AccountRoutes } from './rest/routes/account.routes';

@Module({
  imports: [AccountApplicationModule],
  controllers: [AccountRoutes],
  providers: [
    { provide: 'GetAccountController', useClass: GetAccountController },
  ],
})
export class AccountPresentationModule {}
