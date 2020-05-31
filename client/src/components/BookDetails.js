import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';

const BookDetails = (props) => {
  const { loading, data } = useQuery(getBookQuery, { variables: { id: props.bookId } });

  const displayBookDetails = () => {
    const book = data?.book;
    if (loading) {
      return <div>loading...</div>
    } else if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul className="other-books">
            {
              book.author.books.map(item => <li key={item.id}>{item.name}</li>)
            }
          </ul>
        </div>
      )
    } else {
      return <p>No book selected</p>
    }
  }

  return (
    <div id="book-details">
      <p>Output book details here</p>
      {displayBookDetails()}
    </div>
  )
}

export default BookDetails
