import { createReducer } from '@reduxjs/toolkit';

const ADD = 'bookStore/books/ADD';
const REMOVE = 'bookStore/books/REMOVE';

const addBook = (book) => ({
  type: ADD,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE,
  id,
});

const bookReducer = createReducer([], {
  [ADD]: (state, action) => [...state, action.payload],
  [REMOVE]: (state, action) => state.filter((book) => book.id !== action.id),
});

export { addBook, removeBook };

export default bookReducer;
