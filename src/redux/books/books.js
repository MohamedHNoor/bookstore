import { createReducer } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

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

const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const bookReducer = createReducer(initialState, {
  [ADD]: (state, action) => [...state, action.payload],
  [REMOVE]: (state, action) => state.filter((book) => book.id !== action.id),
});

export { addBook, removeBook };

export default bookReducer;
