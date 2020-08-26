import type { Dice } from "model/dice";

export type Action = {
  type: "ROLL_DICE";
} | {
  type: "CHANGE_DICE";
  dice: Dice;
};
