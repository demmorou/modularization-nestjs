import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';

import { ResolversModule } from './resolvers';
import { GetAccountResolver } from './resolvers/get-account.resolver';

@Module({
  imports: [
    NestGraphQLModule.forRootAsync<YogaDriverConfig>({
      imports: [ResolversModule],
      inject: [GetAccountResolver],
      driver: YogaDriver,
      useFactory: (getAccountResolver: GetAccountResolver) => {
        return {
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
