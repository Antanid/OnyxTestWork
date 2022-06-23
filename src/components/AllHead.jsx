import React, { useContext } from 'react';

import Contacts from './Contact/Contact';

import OurAdvantages from './OurAdvantages/OurAdvantages';
import OurRoute from './OurRoute/OurRoute';
import Photo from './Photo/Photo';
import PreEnd from './PreEnd/PreEnd';
import Questions from './Quest/Questions';
import Gift from './Gift/SectionGift';
import Service from './Service/Service';
import SpecialOffer from './SpecialOffer/SpecialOffer';
import Team from './Team/Team';
import Test from './Test/Test';
import Video from './Video/Video';
import TeamStarWars from './StarWarsTeam/OurStarTeam';
import Additional from './Additional/Additional';
import { ThemeContext } from '../Сontext/ThemeProvider';

function AllHead() {
  const themes = useContext(ThemeContext);
  return (
    <div style={themes}>
      <OurAdvantages />
      <OurRoute />
      <Test />
      <Photo />
      <Video />
      <Team />
      <Service />
      <SpecialOffer />
      <Gift />
      <Questions />
      <Additional />
      <Contacts />
      <PreEnd />
      <TeamStarWars />
    </div>
  );
}

export default AllHead;
