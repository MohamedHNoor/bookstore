import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategory } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const status = () => {
    dispatch(checkCategory());
  };

  return (
    <>
      <div className="categories">
        <h2>{categories}</h2>
      </div>
      <button type="button" onClick={status}>
        Check Status
      </button>
    </>
  );
};

export default Categories;
