import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import { getBookQuery } from '../queries/queries';

const BookDetails = () => {
  const { loading, data } = useQuery(getBookQuery);


  
  return (
    <div id="book-details">
      <p>Output book details here</p>
    </div>
  )
}

export default BookDetails
