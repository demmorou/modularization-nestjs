import { Inject, Injectable } from '@nestjs/common';

import { Account } from '@app/account/domain/entities/account';
import {
  GetAccountUseCase,
  GetAccountUseCaseInput,
} from '@app/account/domain/use-cases/get-account';
import { IAccountRepository } from '../repositories/account.repository';

@Injectable()
export class ImplGetAccountUseCase implements GetAccountUseCase {
  constructor(
    @Inject('AccountRepository')
    private readonly accountRepository: IAccountRepository,
  ) {}

  async handle(input: GetAccountUseCaseInput): Promise<Account> {
    const account = await this.accountRepository.getById(input.accountId);

    if (!account) throw new Error('Account not found');

    return account;
  }
}
