import { configureStore } from '@reduxjs/toolkit';
import homepageSlice from '@/app/[locale]/features/homepage/homepageSlice';

const store = configureStore({
  reducer: {
    homepage: homepageSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
