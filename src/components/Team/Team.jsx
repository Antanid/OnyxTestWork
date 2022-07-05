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
      { name: 'team.Julia', profession: 'team.JuliaProffesion', img: Julia },
      { name: 'team.Maxim', profession: 'team.MaxProffesion', img: Maksim },
      { name: 'team.Christina', profession: 'team.ChristinaProffesion', img: Kristina },
      { name: 'team.Yuriy', profession: 'team.YuriyProffesion', img: Juriy },
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
