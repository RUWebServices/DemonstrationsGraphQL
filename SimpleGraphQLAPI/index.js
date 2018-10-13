const { ApolloServer } = require('apollo-server');

const typeDefs = `
    type Query {
        totalPhotos: Int!
    }
`;

const resolvers = {
    Query: {
        totalPhotos: () => { return 1; }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server
    .listen()
    .then(({ url }) => console.log(`GraphQL API running on ${url}`));
