import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    isProcessing: false,
    fetchStatusNow: false,
  },
  reducers: {
    markFetch: (state, action) => {
      state.isProcessing = true;
    },
    fetchStartStatus: (state, action) => {
      state.fetchStatusNow = true;
    },
    fetchEndStatus: (state, action) => {
      state.fetchStatusNow = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
