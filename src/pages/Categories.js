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
        <button type="button" className="btn-categries" onClick={status}>
          Check Status
        </button>
      </div>
    </>
  );
};

export default Categories;
