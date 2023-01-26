import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const addBookToStore = (e) => {
    e.preventDefault();
    if (!title || !author) {
      return;
    }
    const book = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Fiction',
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add New Book</h2>
      <form className="form" onSubmit={addBookToStore}>
        <input
          type="text"
          name="title"
          className="form-input"
          value={title}
          onChange={handleTitleChange}
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          className="form-input"
          value={author}
          onChange={handleAuthorChange}
          placeholder="Author Name"
        />
        <button className="form-btn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
