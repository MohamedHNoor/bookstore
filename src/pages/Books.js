import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../component/Book';
import Form from '../component/Form';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <>
      <div className="books">
        <div className="books-list">
          {books.map((book) => (
            <Book
              key={book.item_id}
              id={book.item_id}
              title={book.title}
              author={book.author}
            />
          ))}
        </div>
        <div className="books-form">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Books;
