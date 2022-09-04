import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  remarkIsShown: false,
};

export const uiSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleRemarkState: (state, action) => {
      state.remarkIsShown = !state.remarkIsShown
    }
  },
})


export const { toggleRemarkState } = uiSlice.actions;


export default uiSlice.reducer;
