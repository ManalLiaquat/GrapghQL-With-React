const express = require('express');
const grapghqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();
const port = process.env.PORT || 4000;

app.use('/graphql', grapghqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => console.log('server is running on port', port));