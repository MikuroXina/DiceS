import actions from "../actions";

export default function throwDice(state = { histories: [] }, val) {
  if (val.type !== actions.throwDice) return state;

  return {
    histories: [...state.histories, val],
  };
}
