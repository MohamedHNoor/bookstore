import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [], // initial state is an empty array
  reducers: {
    // reducers are functions that determine changes to the state
    checkCategory: () => 'Under construction',
  },
});

export const { checkCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
