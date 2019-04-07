import dice from './reducers/dice';
import history from './reducers/history';
import {combineReducers} from 'redux';

const mapper = (map) => (state, action) =>
  map[action.type] ? map[action.type](state, action.val) : state || map.init();

const reducers = {dice, history};
Object.keys(reducers).forEach((key) => (reducers[key] = mapper(reducers[key])));

export default combineReducers(reducers);
