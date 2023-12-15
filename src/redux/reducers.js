import { combineReducers } from "redux";
import visitedReducer from "./visitedSlice";

const rootReducer = combineReducers({
  visited: visitedReducer,

  // other reducers if you have more slices
});

export default rootReducer;
