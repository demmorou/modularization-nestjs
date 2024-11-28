import { resolve } from 'path';

import { CodegenConfig } from '@graphql-codegen/cli';

const graphqlSchemaPath = resolve(__dirname, 'schema.graphql');
const graphqlGeneratedTypes = resolve(__dirname, '__generated-types.ts');

const codegen: CodegenConfig = {
  schema: [graphqlSchemaPath],
  generates: {
    [graphqlGeneratedTypes]: {
      plugins: ['typescript', 'typescript-resolvers'],
    },
  },
};

export default codegen;
