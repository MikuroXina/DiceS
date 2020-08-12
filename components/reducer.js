import dice from "./reducers/dice";
import history from "./reducers/history";
import { combineReducers } from "redux";

export const reducer = combineReducers({ dice, history });
