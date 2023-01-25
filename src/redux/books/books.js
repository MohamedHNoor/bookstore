import { createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S93t3V7GDOMeAII9wvvv/books';

const GET_BOOKS = 'GET_BOOKS';
const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload.id);
    default:
      return state;
  }
};

export const getBooks = createAsyncThunk(
  GET_BOOKS,
  async (post, { dispatch }) => {
    const response = await fetch(URL);
    const data = await response.json();
    const books = Object.keys(data).map((key) => ({
      ...data[key][0],
      item_id: key,
    }));
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book, { dispatch }) => {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id, { dispatch }) => {
    await fetch(`${URL}/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: REMOVE_BOOK,
      payload: { id },
    });
  },
);

export default booksReducer;
