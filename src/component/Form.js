import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ id: '', title: '', author: '' });

  const addBookToStore = (e) => {
    e.preventDefault();
    if (state.title === '') {
      return;
    }
    dispatch(addBook(state));
    setState({ id: '', title: '', author: '' });
  };

  const handleTitleChange = (e) => {
    setState({
      ...state,
      id: uuidv4(),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form className="form" onSubmit={addBookToStore}>
        <input
          type="text"
          name="title"
          placeholder="Book title"
          value={state.title}
          onChange={handleTitleChange}
        />
        <select
          className="form-select"
          value={state.author}
          onChange={handleTitleChange}
        >
          <option value="">Author</option>
          <option value="option-1">Select option 1</option>
          <option value="option-2">Select option 2</option>
          <option value="option-3">Select option 3</option>
        </select>
        <button className="form-btn" type="submit">
          Add Book
        </button>
      </form>
    </>
  );
};

export default Form;
