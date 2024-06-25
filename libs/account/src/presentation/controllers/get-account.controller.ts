import { Account } from '@app/account/domain/entities/account';
import {
  GetAccountUseCase,
  GetAccountUseCaseInput,
  GetAccountUseCaseOutput,
} from '@app/account/domain/use-cases/get-account';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';

type IResponse<O> = {
  data: O;
  statusCode: number;
};

export interface IController<I, O> {
  handle(params: I): Promise<IResponse<O>>;
}

@Injectable()
export class GetAccountController
  implements IController<GetAccountUseCaseInput, GetAccountUseCaseOutput>
{
  constructor(
    @Inject('GetAccount') private readonly getAccount: GetAccountUseCase,
  ) {}

  async handle(params: any): Promise<IResponse<Account>> {
    const account = await this.getAccount.handle({
      accountId: params.accountId,
    });

    const response: IResponse<Account> = {
      data: account,
      statusCode: HttpStatus.OK,
    };

    return response;
  }
}
