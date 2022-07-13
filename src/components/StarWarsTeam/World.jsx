import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import WorldText from './WorldText';
import { loadPlanetName } from '../../redux/starWarsApi/action';

function WorldStar({ world, nextTeam }) {
  const [planets, setPlanets] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const users = await axios(world);
      const worldData = users.data.name;
      setPlanets(worldData);
      dispatch(loadPlanetName(worldData));
    })();
  }, [nextTeam, world]);
  console.log(planets);
  const worldStar = useSelector((state) => {
    return state.starWarsTeam.worldName;
  });
  return (
    <WorldText
      planet={planets}
      worldStar={worldStar}
    />
  );
}

export default WorldStar;

WorldStar.propTypes = {
  world: PropTypes.string.isRequired,
  nextTeam: PropTypes.number.isRequired
};   
