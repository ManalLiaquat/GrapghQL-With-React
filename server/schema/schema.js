const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

// dummy data
const books = [
  { name: 'Book 1', genre: 'Fantasy', id: '1' },
  { name: 'Book 2', genre: 'Fantasy', id: '2' },
  { name: 'Book 3', genre: 'Sci-Fi', id: '3' },
]

const authors = [
  { name: 'Patrick Rothfuss', age: 44, id: "1" },
  { name: 'Brandon Sanderson', age: 42, id: "2" },
  { name: 'Terry Pratchett', age: 66, id: "3" },
]

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // get data from db (mongodb)
        const data = _.find(books, { id: args.id });
        return data;
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        const data = _.find(authors, { id: args.id });
        return data;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
})