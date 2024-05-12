import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface HomepageSlice {
  isMenuOpen: boolean;
}

const initialState: HomepageSlice = {
  isMenuOpen: false
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    }
  }
});

export const { setMenuOpen } = homepageSlice.actions;

export default homepageSlice.reducer;
