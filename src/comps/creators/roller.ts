import type { Action } from "../actions";

export const rollActionCreator = (dispatch: (action: Action) => void) =>
  (kind: string) => {
    const diceInfo = kind.split("D");
    const [num, face] = diceInfo.map((e) => parseInt(e, 10));
    const rolls: number[] = [...new Array(num)].map(() =>
      Math.floor(Math.random() * face + 1)
    );
    dispatch({ type: "DICE_THROW", val: rolls });
  };
