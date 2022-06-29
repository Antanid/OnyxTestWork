import React, { useState } from 'react';

import Julia from '../../assets/img/team/Julia.svg';
import Maksim from '../../assets/img/team/Maksim.svg';
import Kristina from '../../assets/img/team/Kristina.svg';
import Juriy from '../../assets/img/team/Juriy.svg';

import OurTeam from './OurTeam';

import './sass/Style.scss';

function Team() {
  const [InfoTeam] = useState({
    team: [
      { name: 'Юліана', profession: 'керівник', img: Julia },
      { name: 'Максим', profession: 'старший інструктор', img: Maksim },
      { name: 'Христина', profession: 'адміністратор', img: Kristina },
      { name: 'Юрій', profession: 'Старший механік', img: Juriy },
    ]
  });
  return (
    <section className="section__team">
      <div className="container">
        <OurTeam team={InfoTeam.team} />
      </div>
    </section>
  );
}

export default Team;
