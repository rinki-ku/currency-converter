import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import currency from "./currencyReducer";

export default combineReducers({
  routing: routerReducer,
  currency
});
