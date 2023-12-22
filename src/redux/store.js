import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import vistedSliceReducer from "./visitedSlice";


const rootReducer = combineReducers({
  visited: vistedSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
