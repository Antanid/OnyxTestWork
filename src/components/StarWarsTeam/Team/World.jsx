import axios from 'axios'
import React, { useState, useEffect } from 'react'

function WorldStar({ world, nextTeam, films }) {
    const [filmsName, setFilmsName] = useState([])

    useEffect(() => {
        (async () => {
            const users = await axios(world);
            setFilmsName(users.data)
        })()
    }, [nextTeam, world])

    return (
            <p>Home world: {filmsName.name}</p>
    )
}

export default WorldStar