const express = require('express');
const grapghqlHTTP = require('express-graphql');

const app = express();
const port = process.env.PORT || 4000;

app.use('/graphql', grapghqlHTTP({
  
}))

app.listen(port, () => console.log('server is running on port', port));