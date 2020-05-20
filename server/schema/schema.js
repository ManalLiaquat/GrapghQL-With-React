const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data
const books = [
  { name: 'Book 1', genre: 'Fantasy', id: '1' },
  { name: 'Book 2', genre: 'Fantasy', id: '2' },
  { name: 'Book 3', genre: 'Sci-Fi', id: '3' },
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // get data from db (mongodb)
        const data = _.find(books, { id: args.id });
        return data;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})