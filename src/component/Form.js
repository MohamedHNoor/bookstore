import React from 'react';

const Form = () => (
  <>
    <form className="form">
      <input type="text" name="title" placeholder="Book title" />
      <select className="form-select">
        <option value="author">Select Author</option>
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

export default Form;
