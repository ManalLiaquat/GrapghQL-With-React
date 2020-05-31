const express = require('express');
const grapghqlHTTP = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT || 4000;

mongoose.connect('mongodb+srv://manalDBAdmin:dbadmin123@cluster0-0pcoe.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('Connected to database!');
});

app.use('/graphql', grapghqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, () => console.log('server is running on port', port));