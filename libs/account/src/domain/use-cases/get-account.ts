import { Account } from '../entities/account';

type GetAccountUseCaseInput = {
  accountId: string;
};

type GetAccountUseCaseOutput = Account;

interface GetAccountUseCase {
  handle(input: GetAccountUseCaseInput): Promise<GetAccountUseCaseOutput>;
}

export { GetAccountUseCase, GetAccountUseCaseInput, GetAccountUseCaseOutput };
