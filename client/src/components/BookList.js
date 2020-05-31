import React from 'react'
import { useQuery } from '@apollo/react-hooks';

//queries 
import { getBooksQuery } from '../queries/queries';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  console.log(loading, error, data, 'data');
  
  const displayBooks = () => {
    if (loading) {
      return <div>Loading...</div>
    } else {
    return data.books.map(book => <li key={book.id}>{book.name} - {book.genre}</li>)
    }
  }

  return (
    <div>
      <ul id="book-list">
        {displayBooks()}
      </ul>
    </div>
  )
}

export default BookList
