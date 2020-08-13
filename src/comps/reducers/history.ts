import type { Action } from "../actions";
import type { Reducer } from "react";

export type History = number[][];

export const throwDice: Reducer<History, Action> = (
  state: History = [],
  action: Action,
): History => {
  if (action.type !== "DICE_THROW") return state;

  return [...state, action.val];
};
