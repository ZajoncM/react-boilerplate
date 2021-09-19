import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit';

const clickerSlice = createSlice({
  name: 'click',
  initialState: 0,
  reducers: {
    increment: (state, action: PayloadAction<number>) => (state += action.payload),
  },
});

export const { increment } = clickerSlice.actions;

export const store = configureStore({
  reducer: {
    clicker: clickerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
