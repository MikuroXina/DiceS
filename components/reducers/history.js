import actions from '../actions';

export default {
  [actions.throwDice]: (state, val) => ({
    histories: [...state.histories, val]
  }),
  init: () => ({histories: []})
};
