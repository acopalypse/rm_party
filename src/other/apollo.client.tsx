import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql?',
  cache: new InMemoryCache({
    typePolicies: {
      Character: {
        fields: {
          block: {
            read(type = false) {
              return type;
            },
          },
        },
      },
    },
  }),
});
