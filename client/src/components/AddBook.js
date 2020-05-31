import React from 'react'
import { useQuery } from '@apollo/react-hooks';

// queries
import { getAuthorsQuery } from '../queries/queries';

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  // console.log(loading, error, data, 'data');

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>loading...</option>
    } else {
      return data.authors.map(author => <option key={author.id} value={author.name}>{author.name}</option>)
    }
  }

  return (
    <form id="add-book">

      <div className="field">
        <label>Book name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select name="author">
          <option value="">Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  )
}

export default AddBook
