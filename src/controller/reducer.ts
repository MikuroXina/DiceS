import { Dice, roll, NormalizedRng } from "model/dice";
import type { Action } from "./action";

export interface State {
  dice: Readonly<Dice>;
  history: readonly number[][];
}

export const reducer = (rng: NormalizedRng) =>
  (state: Readonly<State>, action: Readonly<Action>): State => {
    switch (action.type) {
      case "CHANGE_DICE":
        return {
          ...state,
          dice: action.dice,
        };
      case "ROLL_DICE":
        const result = roll(state.dice, rng);
        console.log(result);
        return {
          ...state,
          history: [...state.history, result],
        };
    }
  };
