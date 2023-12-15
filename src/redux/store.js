import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

export default configureStore({
  reducer: rootReducer,
  // Other store configurations if needed
});