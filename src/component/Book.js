import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <div className="book-container">
      <div className="book">
        <div className="book-cover">
          <h4 className="book-category">Fiction</h4>
          <h2 className="book-title">{title}</h2>
          <p className="book-author">{author}</p>
        </div>
        <div className="action-buttons">
          <button type="button" className=" btn-primary">
            Comments
          </button>
          <div className="divider" />
          <button
            type="button"
            className="btn-primary"
            onClick={() => handleRemoveBook()}
          >
            Remove
          </button>
          <div className="divider" />
          <button type="button" className="btn-primary">
            Edit
          </button>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress">
          <div className="progress-circle-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-status">
            <p className="progress-value">60%</p>
            <p className="completed">Completed</p>
          </div>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter">
          <p className="current-chapter-title">CURRENT CHAPTER</p>
          <p className="current-chapter-number">Chapter 17</p>
          <button type="button" className="btn-update">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
