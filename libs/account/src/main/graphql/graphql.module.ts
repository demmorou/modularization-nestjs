import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverAsyncConfig } from '@nestjs/apollo';

import { ResolversModule } from './resolvers';
import { GetAccountResolver } from './resolvers/get-account.resolver';

@Module({
  imports: [
    NestGraphQLModule.forRootAsync<ApolloDriverAsyncConfig | any>({
      imports: [ResolversModule],
      inject: [GetAccountResolver],
      driver: ApolloDriver,
      useFactory: (getAccountResolver: GetAccountResolver) => {
        return {
          driver: ApolloDriver,
          typePaths: ['./**/*.graphql'],
          definitions: {
            path: join(__dirname, '__generated-types.ts'),
          },
          resolvers: {
            Query: {
              user: getAccountResolver.resolve,
            },
          },
        };
      },
    }),
  ],
})
export class GraphQLModule {}
