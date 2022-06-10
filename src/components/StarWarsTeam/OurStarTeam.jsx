import axios from "axios";
import React, { useEffect, useState } from "react";

import './Style.scss'
import StarTeam from "./Team/StarTeam";

const TeamStarWars = () => {
    const [starTeam, setStarTeam] = useState([]);
    const [nextTeam, setNextTeam] = useState(1);


    useEffect(() => {
        axios.get('https://swapi.dev/api/people').then((res) => {
            setStarTeam(res.data.results);
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/?page=${nextTeam}`).then((res) => {
            setStarTeam(res.data.results)
        }).catch((error) => {
            console.log(error)
        })
    }, [nextTeam])

    function secenPage() {
        if (nextTeam < 9) {
            setNextTeam(nextTeam + 1)
        }
    }
    function prevPage() {
        if (nextTeam > 1) {
            setNextTeam(nextTeam - 1)
        }
    }

    return (
        <section className="section__team">
            <div className="container">
                <StarTeam
                    nextTeam={nextTeam}
                    team={starTeam}
                    secenPage={secenPage}
                    prevPage={prevPage} />
            </div>


        </section>
    );
}

export default TeamStarWars;