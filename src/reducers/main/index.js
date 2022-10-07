import {combineReducers} from 'redux';
import MainReducer from '../MainReducer';

export const reducer = combineReducers({
  main: MainReducer,
});
