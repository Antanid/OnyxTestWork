/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import {
  LOAD_STAR_WARS_API,
  LOAD_PLANET_NAME,
  LOADING_STARWATS_ON,
  LOADING_STARWATS_OFF,

} from './types';

export function loaderOn() {
  return {
    type: LOADING_STARWATS_ON
  };
}
export function loaderOff() {
  return {
    type: LOADING_STARWATS_OFF
  };
}

export function loadApiStarWars(nextTeam) {
  return async (dispatch) => {
    dispatch(loaderOn());
    const res = await axios('https://swapi.dev/api/people', { params: { page: nextTeam } });
    const jsonData = await res.data.results;
    dispatch({
      type: LOAD_STAR_WARS_API,
      data: jsonData
    });
    dispatch(loaderOff());
  };
}

export function loadPlanetName(world) {
  return async (dispatch) => {
    const res = await axios(world);
    const jsonData = res.data;
    dispatch({
      type: LOAD_PLANET_NAME,
      data: jsonData,
      homeworld: world
    });
  };
}
