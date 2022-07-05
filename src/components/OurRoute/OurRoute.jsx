import React from 'react';
import { useTranslation } from 'react-i18next';

import Rubl from '../../assets/img/rubl.png';
import Line from '../../assets/img/Line 1.png';
import Time from '../../assets/img/Time.png';
import Location from '../../assets/img/Location.png';
import Complexity from '../../assets/img/complexity.png';
import Route from '../../assets/img/Route.png';

import Qadro from '../../assets/img/baseQadro.svg';

import QadroSecend from '../../assets/img/baseFistOther.svg';
import SecendQadroSecend from '../../assets/img/Second2.svg';

import SecendQadroThird from '../../assets/img/Second.svg';
import ThirdQadroFirst from '../../assets/img/ThirdRout.svg';

import ThirdQadroThird from '../../assets/img/ThirdRout2.svg';
import PopUpExc from '../PopUpExc/PopUpExc';
import FirstPage from '../FirstPage/FirstPage';
import SecendPage from '../SecendPage/SecendPage';
import ThirdPage from '../ThirdPage/ThirdPage';
import OurTextH2 from './OurTextH2';

import './sass/Style.scss';
import usePopUp from '../../hooks/usePopUp';

function OurRoute() {
  const { open, close, openPopUp } = usePopUp();
  const { t } = useTranslation();
  return (
    <article className="our__route">
      <div className="container-fluid">
        <div className="row">

          <OurTextH2>{t('ourRoute.RouteTextBase')}</OurTextH2>

          <FirstPage
            OpenPopUp={open}
            Line={Line}
            Rubl={Rubl}
            TimeImg={Time}
            Location={Location}
            Complexity={Complexity}
            Route={Route}
            Qadro={Qadro}
            QadroSecend={QadroSecend}
            QadroThird={QadroSecend}
          />

          <SecendPage
            OpenPopUp={open}
            Line={Line}
            Rubl={Rubl}
            TimeImg={Time}
            Location={Location}
            Complexity={Complexity}
            Route={Route}
            SecendQadroFirst={QadroSecend}
            SecendQadroSecend={SecendQadroSecend}
            SecendQadroThird={SecendQadroThird}
          />

          <ThirdPage
            OpenPopUp={open}
            Line={Line}
            Rubl={Rubl}
            TimeImg={Time}
            Location={Location}
            Complexity={Complexity}
            Route={Route}
            ThirdQadroFirst={ThirdQadroFirst}
            ThirdQadroSecend={QadroSecend}
            ThirdQadroThird={ThirdQadroThird}
          />

        </div>
      </div>

      {openPopUp
        && <PopUpExc ClosePopUp={close} />}
    </article>
  );
}

export default OurRoute;
