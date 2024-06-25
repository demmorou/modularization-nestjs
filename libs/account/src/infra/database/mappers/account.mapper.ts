import { Account } from '@app/account/domain/entities/account';
import { AccountDatabaseDto } from '../dtos/account.datasource';

export class AccountDatabaseMapper {
  static map(account: AccountDatabaseDto): Account {
    if (!account) return null;

    return {
      firstName: account.firstName,
      id: account.id,
      lastLogin: new Date(account.lastLogin),
      lastName: account.lastLogin,
      username: account.username,
    };
  }
}
