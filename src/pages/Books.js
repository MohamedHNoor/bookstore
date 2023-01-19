import React from 'react';
import Book from '../component/Book';
import Form from '../component/Form';

const data = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
  {
    id: 4,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

const Books = () => (
  <>
    <div className="books">
      <div className="books-list">
        {data.map((book) => (
          <Book key={book.id} title={book.title} author={book.author} />
        ))}
      </div>
      <div className="books-form">
        <Form />
      </div>
    </div>
  </>
);

export default Books;
