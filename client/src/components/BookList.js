import React, { useState } from 'react'
import { useQuery } from '@apollo/react-hooks';
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';


const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);

  const displayBooks = () => {
    if (loading) {
      return <div>Loading...</div>
    } else {
      return data.books.map(book => <li key={book.id} onClick={() => setSelected(book.id)}>{book.name}</li>)
    }
  }

  return (
    <div>
      <ul id="book-list">
        {displayBooks()}
        <BookDetails bookId={selected} />
      </ul>
    </div>
  )
}

export default BookList
