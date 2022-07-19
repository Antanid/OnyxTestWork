import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WorldText from './WorldText';
import { loadPlanetName } from '../../redux/starWarsApi/action';

function WorldStar({ world, nextTeam }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPlanetName(world));
  }, [nextTeam, world]);
  const worldStar = useSelector((state) => {
    return state.WorldReducer[world];
  });
  return (
    <WorldText
      worldStar={worldStar}
    />
  );
}

export default WorldStar;

WorldStar.propTypes = {
  world: PropTypes.string.isRequired,
  nextTeam: PropTypes.number.isRequired
};   
