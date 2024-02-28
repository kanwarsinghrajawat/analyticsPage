import { combineReducers } from "@reduxjs/toolkit";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
  filterReducer: filterReducer,
});

export default rootReducer;
