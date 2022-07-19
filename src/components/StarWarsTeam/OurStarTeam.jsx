import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadApiStarWars } from '../../redux/starWarsApi/action';
import ButtonNextPrev from './ButtonNextPrev';
import './sass/Style.scss';
import StarTeam from './StarTeam';

function TeamStarWars() {
  const [nextTeam, setNextTeam] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApiStarWars(nextTeam));
  }, [nextTeam]);

  const starTeamWars = useSelector((state) => {
    const { PeopleReducer } = state;
    return PeopleReducer.starTeam;
  });
  const loadingStar = useSelector((state) => {
    const { LoaderRuducer } = state;
    return LoaderRuducer.loading;
  });
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
            loadingStar ? (
              <div className="spinner-border" role="status">
                <span className="sr-only" />
              </div>
            )
              : (
                <ButtonNextPrev
                  prevPage={prevPage}
                  secenPage={secenPage}
                  nextTeam={nextTeam}
                />
              )
          }
        </div>
      </div>
    </section>
  );
}

export default TeamStarWars;
