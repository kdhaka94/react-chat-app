// import { ApolloServer, gql } from 'apollo-server';
// import { Users } from './dummyData/user';

// require('dotenv').config();

// const typeDefs = gql`
//   type Query {
//     GetUserById(id: Int): User
//     LoginUser(data: LoginInput): String
//     GetAllUsers: [User]
//   }
//   type User {
//     id: Int
//     name: String
//     email: String
//     password: String
//   }

//   input LoginInput {
//     email: String
//     password: String
//   }
// `;

// const resolvers = {
//   Query: {
//     GetUserById: (_, { id }, context) => {
//       return Users[id - 1];
//     },
//     GetAllUsers: () => Users,
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// server.listen().then(({ url }) => {
//   console.log(`Listening on ${url}`);
// });


import { path, app, httpServer } from './server';
import { server } from './graphql';

// graphql.applyMiddleware({ app, path });
server.applyMiddleware({ app, path });
server.installSubscriptionHandlers(httpServer);

httpServer.listen(process.env.PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${process.env.PORT}${server.subscriptionsPath}`);
});

