import actions from '../actions';

export default {
  [actions.changeDice]: (state, val) => {
    const posD = val.indexOf('D');
    if (0 < posD && posD < val.length) {
      const info = val.split('D');
      if (info.length === 2) {
        const [num, faces] = info;
        if (0 < parseInt(num, 10) && 0 < parseInt(faces, 10)) {
          return {kind: val};
        }
      }
    }
    return state;
  },
  init: () => ({kind: '2D6'})
};
