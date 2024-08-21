import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bagCart",
  initialState: [],
  reducers: {
    pushItem: (state, action) => {
      state.push(action.payload);
    },
    removeItem: (state, action) => {
      return state = state.filter((item) => item !== action.payload)
    },
  },
});


export const bagSliceAction = bagSlice.actions;

export default bagSlice;
