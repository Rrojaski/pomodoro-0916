import { combineReducers } from "redux";
import { timeReducer } from "./reducers";

export default combineReducers({
  allReducer: timeReducer
});
