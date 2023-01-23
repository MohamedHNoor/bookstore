import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkCategory } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(checkCategory());
  }, []);

  return (
    <>
      <div className="categories">{categories}</div>
    </>
  );
};

export default Categories;
