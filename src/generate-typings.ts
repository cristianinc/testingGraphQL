import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definirionsFactory = new GraphQLDefinitionsFactory();
definirionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
});
