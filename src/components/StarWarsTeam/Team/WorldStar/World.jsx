import axios from 'axios'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import WorldText from './WorldText';


function WorldStar({ world, nextTeam }) {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        (async () => {
            const users = await axios(world);
            setPlanets(users.data)
        })()
    }, [nextTeam, world])

    return (
        <WorldText planet={planets.name} />

    )
}

export default WorldStar;


WorldStar.propTypes = {
    world: PropTypes.string.isRequired,
    nextTeam: PropTypes.number.isRequired
}   