import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { recipesSlice } from '../features/food/store/foodSlice';
export const store = configureStore({
  reducer: {
    foods: recipesSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
