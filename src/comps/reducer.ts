import type { Reducer } from "react";
import { changeDice } from "./reducers/dice";
import { throwDice } from "./reducers/history";
import type { Dice } from "./reducers/dice";
import type { History } from "./reducers/history";
import type { Action } from "./actions";
import { combineReducers } from "./util";

export interface State {
  dice: Dice;
  history: History;
}

const reducers = {
  dice: changeDice,
  history: throwDice,
} as const;

export const reducer = combineReducers<State, Action>(reducers);
