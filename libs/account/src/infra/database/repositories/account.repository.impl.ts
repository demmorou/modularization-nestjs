import { IAccountRepository } from '@app/account/application/repositories/account.repository';
import { Account } from '@app/account/domain/entities/account';
import { Inject, Injectable } from '@nestjs/common';
import { AccountDatabaseDto } from '../dtos/account.datasource';
import { AccountDatabaseMapper } from '../mappers/account.mapper';

@Injectable()
export class ImplAccountRepository implements IAccountRepository {
  constructor(
    @Inject('AccountDataSource')
    private readonly dataSource: AccountDatabaseDto[],
  ) {}

  async getById(id: string): Promise<Account> {
    const account = this.dataSource.find(
      (account: AccountDatabaseDto) => account.id === id,
    );

    return AccountDatabaseMapper.map(account);
  }
}
