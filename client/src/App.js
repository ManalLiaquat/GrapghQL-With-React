import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import { client } from './config/graphql';
// components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>My Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
