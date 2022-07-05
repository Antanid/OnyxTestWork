import React, { useState } from 'react';

import Elipse from '../../assets/img/Ellipse_Green.png';
import Tree from '../../assets/img/Tree.png';
import Bike from '../../assets/img/quad_bike.png';
import Helmet from '../../assets/img/helmet.png';
import OurAdvComponent from './OurAdvComponent';

import './sass/Style.scss';

function OurAdvantages() {
  const [InfoText] = useState({
    adventures: [
      {
        id: 1,
        img: Bike,
        elipse: Elipse,
        title: 'adventures.excursionBikeTitle',
        description: 'adventures.excursionBikeDescroption',
      },
      {
        id: 2,
        img: Tree,
        elipse: Elipse,
        title: 'adventures.excursionTreeTitle',
        description: 'adventures.excursionTreeDescroption',
      },
      {
        id: 3,
        img: Helmet,
        elipse: Elipse,
        title: 'adventures.excursionHelmetTitle',
        description: 'adventures.excursionHelmetDescroption',
      },
      {
        id: 4,
        img: Bike,
        elipse: Elipse,
        title: 'adventures.excursionBikeTitleLast',
        description: 'adventures.excursionBikeDescroptionLast',
      },

    ]
  });

  return (
    <OurAdvComponent routes={InfoText.adventures} />
  );
}

export default OurAdvantages;
