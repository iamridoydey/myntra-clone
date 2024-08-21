import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      console.log(state, action.payload)
      return action.payload;
    },
  },
});

export default itemsSlice;

export const itemsActions = itemsSlice.actions;