import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Close from '../../assets/img/icons8-close.svg';
import Line from '../../assets/img/Line 1.png';
import Time from '../../assets/img/Time.png';
import Location from '../../assets/img/Location.png';
import Complexit from '../../assets/img/complexity.png';
import Route from '../../assets/img/Route.png';

import QuadroFirst from '../../assets/img/baseQadro.svg';
import QuadroSecend from '../../assets/img/baseFistOther.svg';

import BikeFirst from '../../assets/img/popup_bike_1.svg';
import BikeSecend from '../../assets/img/popup-bike-2.svg';
import BikeThird from '../../assets/img/popup-bike-3.svg';
import BikeFour from '../../assets/img/popup-bike-4.svg';
import BikeFive from '../../assets/img/popup-bike-5.svg';
import BikeSix from '../../assets/img/popup-bike-6.svg';

import Ruble from '../../assets/img/popup_ruble.svg';
import PopUpComponent from './PopUpComponent';
import PopUpRoute from './PopUpRoute';
import PopUpImg from './PopUpImg';
import PopUpInterested from './PopUpInterested';
import PopUpSecendHead from './PopUpSecendHead';
import PopUpForm from './PopUpForm';
import './sass/Style.scss';

function PopUpExc({ ClosePopUp }) {
  const [bikes] = useState({
    Allbikes: [
      {
        bike: 'UFORCE 1000 EPS (U10 EPS)', price: 4000, imgMoney: Ruble, bikeImg: BikeFirst
      },
      {
        bike: 'CFORCE 1000 EPS (X10 EPS)', price: 6000, imgMoney: Ruble, bikeImg: BikeSecend
      },
      {
        bike: 'CFMOTO CFORCE 600 EPS', price: 7000, imgMoney: Ruble, bikeImg: BikeThird
      },
      {
        bike: 'CFORCE 400L EPS', price: 8000, imgMoney: Ruble, bikeImg: BikeFour
      },
      {
        bike: 'ZFORCE 1000', price: 9000, imgMoney: Ruble, bikeImg: BikeFive
      },
      {
        bike: 'UFORCE 1000 EPS', price: 4000, imgMoney: Ruble, bikeImg: BikeSix
      },
    ]
  });
  const { t } = useTranslation();
  return (
    <div className="popup__bg__exc">
      <div
        tabIndex={0}
        role="button"
        className="popup__exc"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <div
          tabIndex={0}
          role="button"
          onKeyDown={ClosePopUp}
          onClick={ClosePopUp}
        >
          <img
            src={Close}
            alt="close-popup"
            className="close-popup_exc"
          />
        </div>

        <div className="container">
          <div className="row">
            <PopUpRoute
              LocationImg={Location}
              Line={Line}
              TimeImg={Time}
              RouteImg={Route}
              ComplexitImg={Complexit}
              RouteText={t('popUpExc.RouteText')}
              TimeText={t('popUpExc.TimeText')}
              DistanceText={t('popUpExc.DistanceText')}
              complexityText="5***"
              ExcursionHead={t('popUpExc.ExcursionHead')}
              TimeToRout={t('popUpExc.TimeToRout')}
              RoutDistance={t('popUpExc.RoutDistance')}
              Complexity={t('popUpExc.Complexity')}
              RoutText={t('popUpExc.RoutText')}
              RouteScheme={t('popUpExc.RouteScheme')}
            />
            <PopUpImg
              QuadroFirst={QuadroFirst}
              QuadroSecend={QuadroSecend}
            />
            <PopUpInterested
              HeaderText={t('popUpExc.HeaderTextExc')}
              FirstPartText={t('popUpExc.FirstPartText')}
              SecendPartText={t('popUpExc.SecendPartText')}
            />
            <PopUpSecendHead>{t('popUpExc.PopUpSecendHead')}</PopUpSecendHead>
            <PopUpComponent bikes={bikes.Allbikes} />
            <PopUpForm
              online={t('popUpExc.OnlineForm')}
              dateText={t('popUpExc.DateTextForm')}
              howMuch={t('popUpExc.HowMuchForm')}
              phoneNumber={t('popUpExc.PhoneNumberForm')}
              backToYou={t('popUpExc.BackToYouForm')}
              book={t('popUpExc.ButtonFormExc')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpExc;

PopUpExc.propTypes = {
  ClosePopUp: PropTypes.func.isRequired,
};
