import { Controller, Get, Inject, Res } from '@nestjs/common';
import { IController } from '../../controllers/get-account.controller';
import {
  GetAccountUseCaseInput,
  GetAccountUseCaseOutput,
} from '@app/account/domain/use-cases/get-account';
import { Response } from 'express';
import { GetAccountDocs } from '@app/account/docs/paths/account.paths';

@Controller('accounts')
export class AccountRoutes {
  constructor(
    @Inject('GetAccountController')
    private readonly getAccountController: IController<
      GetAccountUseCaseInput,
      GetAccountUseCaseOutput
    >,
  ) {}

  @GetAccountDocs()
  @Get('/me')
  async getMe(@Res() res: Response) {
    const output = await this.getAccountController.handle({
      accountId: '1144031d-8bd3-4b54-8876-69611f7ad69d',
    });

    return res.status(output.statusCode).json(output.data);
  }
}
