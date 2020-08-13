import type { Dice } from "./reducers/dice";

export type Action = {
  type: "DICE_THROW";
  val: number[];
} | {
  type: "DICE_CHANGE";
  val: Dice;
};
