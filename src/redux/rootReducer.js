/* eslint-disable import/prefer-default-export */
import { combineReducers } from 'redux';
import { popUpRuducer } from './popUpHeader/popUpRuducer';
import { popUpExcReducer } from './popUpExc/popUpExcReducer';
import { PeopleReducer } from './starWarsApi/PeopleReducer';
import { WorldReducer } from './starWarsApi/WorldReducer';

export const rootReducer = combineReducers({
  popUpRuducer,
  popUpExcReducer,
  PeopleReducer,
  WorldReducer
});
