import React, { useState } from 'react';

import evacuation from '../../assets/img/additional1.svg';
import Photo from '../../assets/img/additional2.svg';
import Transp from '../../assets/img/additional3.svg';
import CheckUp from '../../assets/img/additional4.svg';
import Corpotartion from '../../assets/img/additional5.svg';
import Keitering from '../../assets/img/additional6.svg';
import Route from '../../assets/img/additional7.svg';
import Services from '../../assets/img/additional8.svg';
import AdditionalComp from './AdditionalComp';

function Additional() {
  const [serviceText] = useState({
    services: [
      { text: 'additional.EvacuationText', img: evacuation },
      { text: 'additional.PhotoText', img: Photo },
      { text: 'additional.TransportationText', img: Transp },
      { text: 'additional.GasTest', img: CheckUp },
      { text: 'additional.CorporateText', img: Corpotartion },
      { text: 'additional.CateringText', img: Keitering },
      { text: 'additional.RouteText', img: Route },
      { text: 'additional.ServicesText', img: Services },
    ]
  });
  return (
    <AdditionalComp service={serviceText.services} />
  );
}

export default Additional;
