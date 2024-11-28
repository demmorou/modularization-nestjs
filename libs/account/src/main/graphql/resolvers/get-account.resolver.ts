import { Inject, Injectable } from '@nestjs/common';
import { Resolvers } from '../__generated-types';
import { GetAccountUseCase } from '@app/account/domain/use-cases/get-account';

export type ResolverField<R, T extends keyof R, K extends keyof R[T]> = R[T][K];
export interface GraphQLResolver<R, T extends keyof R, K extends keyof R[T]> {
  resolve: ResolverField<R, T, K>;
}

@Injectable()
export class GetAccountResolver
  implements GraphQLResolver<Resolvers, 'Query', 'user'>
{
  constructor(
    @Inject('GetAccount') private readonly getAccountUseCase: GetAccountUseCase,
  ) {}

  resolve: ResolverField<Resolvers, 'Query', 'user'> = async (
    _parent,
    args,
  ) => {
    const user = await this.getAccountUseCase.handle({ accountId: args.id });

    return {
      firstName: user.firstName,
      id: user.id,
      lastName: user.lastName,
      // TODO: Chage to presentation layer
      lastLogin: user.lastLogin.toISOString(),
    };
  };
}
