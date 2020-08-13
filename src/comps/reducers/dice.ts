import type { Action } from "../actions";
import type { Reducer } from "react";

export type Dice = {
  num: number;
  faces: number;
};

export function diceFrom(val: string): Dice | null {
  const info = val.split("D");
  if (info.length !== 2) {
    return null;
  }

  const [num, faces] = info;
  if (!(0 < parseInt(num, 10) && 0 < parseInt(faces, 10))) {
    return null;
  }
  return { num: +num, faces: +faces };
}

export const changeDice: Reducer<Dice, Action> = (
  state: Dice = { num: 2, faces: 6 },
  action: Action,
): Dice => {
  if (action.type !== "DICE_CHANGE") {
    return state;
  }
  return action.val;
};
