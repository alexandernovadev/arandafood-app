import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 0,
  recipes: [],
  isLoading: false,
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    startLoadindRecipes: (state) => {
      state.isLoading = true;
    },
    setRecipes: (state, action) => {
      state.recipes = action.payload;
      state.isLoading = false;
    },
  },
});

export const { startLoadindRecipes, setRecipes } = recipesSlice.actions;
