import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks';

// queries
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

const AddBook = () => {
  const { loading, data } = useQuery(getAuthorsQuery);
  const [addTodo, addBookResponse] = useMutation(addBookMutation);

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [authorId, setAuthorId] = useState('');

  const displayAuthors = () => {
    if (loading) {
      return <option disabled>loading...</option>
    } else {
    return data.authors.map(author => <option key={author.id} value={author.name}>{author.name}</option>)
    }
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await addTodo({ variables: { name, genre, authorId } })
      console.log(res.data, 'res.data');
      console.log(addBookResponse, 'addBookResponse');
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <form id="add-book" onSubmit={handleSubmit}>

      <div className="field">
        <label>Book name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={e => setGenre(e.target.value)} />
      </div>

      <div className="field">
        <label>Author:</label>
        <select onChange={e => setAuthorId(e.target.value)}>
          <option value="">Select author</option>
          {displayAuthors()}
        </select>
      </div>

      <button>+</button>
    </form>
  )
}

export default AddBook
