import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./itemsSlice"
import fetchStatusSlice from "./FetchStatusSlice";

const store = configureStore(
  {reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer
  }}
)

export default store;