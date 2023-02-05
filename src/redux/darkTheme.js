import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bool: false,
};

export const darkThemeSlice = createSlice({
  name: 'Dark Theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.bool = !state.bool;
    },
  },
});


export const { toggle } = darkThemeSlice.actions

export default darkThemeSlice.reducer