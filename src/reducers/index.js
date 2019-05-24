import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import robotsReducer from "./robotsReducer";

export default combineReducers({
  searchReducer,
  robotsReducer
});
