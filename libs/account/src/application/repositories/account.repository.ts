import { Account } from '@app/account/domain/entities/account';

export interface IAccountRepository {
  getById(id: string): Promise<Account>;
}
