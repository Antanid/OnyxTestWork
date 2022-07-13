import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadApiStarWars, loadNextApiStarWars } from '../../redux/starWarsApi/action';
import ButtonNextPrev from './ButtonNextPrev';
import './sass/Style.scss';
import StarTeam from './StarTeam';

function TeamStarWars() {
  const [nextTeam, setNextTeam] = useState(1);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('https://swapi.dev/api/people').then((res) => {
      const data = res.data.results;
      dispatch(loadApiStarWars(data));
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

  const starTeamWars = useSelector((state) => {
    const { starWarsTeam } = state;
    return starWarsTeam.starTeam;
  });

  useEffect(() => {
    axios.get('https://swapi.dev/api/people', { params: { page: nextTeam } }).then((res) => {
      const data = res.data.results;
      dispatch(loadNextApiStarWars(data));
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
        <StarTeam
          nextTeam={nextTeam}
          team={starTeamWars}
          secenPage={secenPage}
          prevPage={prevPage}
        />
        <div>
          {
            loading ? (
              <ButtonNextPrev
                loading={loading}
                prevPage={prevPage}
                secenPage={secenPage}
                nextTeam={nextTeam}
              />
            )
              : (
                <div className="spinner-border" role="status">
                  <span className="sr-only" />
                </div>
              )
          }
        </div>
      </div>
    </section>
  );
}

export default TeamStarWars;
