import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './sass/Style.scss';
import StarTeam from './StarTeam';

function TeamStarWars() {
  const [starTeam, setStarTeam] = useState([]);
  const [nextTeam, setNextTeam] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then((res) => {
      setStarTeam(res.data.results);
    }).catch((error) => {
      console.log(error);
    })
      .finally(() => {
        setLoading(true);
      });

    return () => {
      setLoading(false);
    };
  }, []);

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people/?page=${nextTeam}`).then((res) => {
      setStarTeam(res.data.results);
    }).catch((error) => {
      console.log(error);
    })
      .finally(() => {
        setLoading(true);
      });
    return () => {
      setLoading(false);
    };
  }, [nextTeam]);

  const secenPage = () => {
    if (nextTeam < 9) {
      setNextTeam(nextTeam + 1);
    }
  };
  const prevPage = () => {
    if (nextTeam > 1) {
      setNextTeam(nextTeam - 1);
    }
  };

  return (
    <section className="section__team">
      <div className="container">
        {loading ? (
          <StarTeam
            nextTeam={nextTeam}
            team={starTeam}
            secenPage={secenPage}
            prevPage={prevPage}
          />
        ) : (
          <div className="spinner-border" role="status">
            <span className="sr-only" />
          </div>
        )}
      </div>
    </section>
  );
}

export default TeamStarWars;
