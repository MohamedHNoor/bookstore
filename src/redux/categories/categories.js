const CHECKED_CATEGORY = 'categories/checkedCategory';

const checkCategory = () => ({
  type: CHECKED_CATEGORY,
});

const categoryReducer = (state = [], action = {}) => {
  switch (action.type) {
    case CHECKED_CATEGORY:
      return 'Under construction';
    default:
      return state;
  }
};

export { checkCategory };

export default categoryReducer;
