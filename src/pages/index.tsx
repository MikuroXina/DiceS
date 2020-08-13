import type { NextPage } from "next";
import { FC, ChangeEvent, useReducer } from "react";

import type { Action } from "comps/actions";
import { rollActionCreator as roller } from "comps/creators/roller";
import { diceFrom, Dice } from "comps/reducers/dice";
import { reducer } from "comps/reducer";

const RolledHistorty: FC<{ history: number[][] }> = ({ history }) => (
  <>
    <div className="history">
      {history.reverse().map((results, i) => (
        <div key={i}>{results.join(" , ")}</div>
      ))}
    </div>
    <style jsx>{`
      .history {
        position: fixed;
        height: 75%;
        overflow: auto;
        bottom: 10px;
      }
    `}</style>
  </>
);

const DiceInput: FC<{ dispatch: (action: Action) => void; dice: Dice }> = ({
  dispatch,
  dice,
}) => {
  const kind = `${dice.num}D${dice.faces}`;

  return (
    <>
      <label>nDn (nは正の整数) で種類を入力　Dは必ず大文字で</label>
      <input
        type="text"
        onChange={diceChangeHandler(dispatch)}
        defaultValue={kind}
      />
      <button onClick={() => roller(dispatch)(kind)}>Roll</button>
      <h2>{kind}</h2>
    </>
  );
};

const diceChangeHandler = (dispatch: (action: Action) => void) => (
  e: ChangeEvent<HTMLInputElement>
) => {
  const dice = diceFrom(e.target.value);
  if (!dice) return;
  dispatch({ type: "DICE_CHANGE", val: dice });
};

const Index: NextPage = () => {
  const [state, dispatch] = useReducer(reducer, {
    dice: { num: 2, faces: 6 },
    history: [],
  });
  const { dice, history } = state;
  return (
    <div>
      <DiceInput dispatch={dispatch} dice={dice} />
      <RolledHistorty history={history.slice()} />
    </div>
  );
};

export default Index;
