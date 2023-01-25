const CHECKED_CATEGORY = 'categories/checkedCategory';

const categoryReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECKED_CATEGORY:
      return 'Under construction';
    default:
      return state;
  }
};

const checkCategory = () => ({
  type: CHECKED_CATEGORY,
});

export { checkCategory };

export default categoryReducer;
