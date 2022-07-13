/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { popUpRuducer } from './popUpHeader/popUpRuducer';
import { popUpExcReducer } from './popUpExc/popUpExcReducer';
import { starWarsTeam } from './starWarsApi/starWarsReducer';

export const rootReducer = combineReducers({
  popUpRuducer,
  popUpExcReducer,
  starWarsTeam
});
