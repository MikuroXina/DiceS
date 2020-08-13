import actions from "../actions";

const rollActionCreator = (dispatch) => (kind) => {
  const diceInfo = kind.split("D");
  const [num, face] = diceInfo.map((e) => parseInt(e, 10));
  const rolls = [];
  for (let i = 0; i < num; ++i) {
    rolls.push(Math.floor(Math.random() * face + 1));
  }
  dispatch({ type: actions.throwDice, val: rolls });
};

export default rollActionCreator;
