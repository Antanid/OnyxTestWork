import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Close from '../../../assets/img/icons8-close.svg';
import Line from '../../../assets/img/Line 1.png';
import Time from '../../../assets/img/Time.png';
import Location from '../../../assets/img/Location.png';
import Complexit from '../../../assets/img/complexity.png';
import Route from '../../../assets/img/Route.png';

import QuadroFirst from '../../../assets/img/baseQadro.svg';
import QuadroSecend from '../../../assets/img/baseFistOther.svg';

import BikeFirst from '../../../assets/img/popup_bike_1.svg';
import BikeSecend from '../../../assets/img/popup-bike-2.svg';
import BikeThird from '../../../assets/img/popup-bike-3.svg';
import BikeFour from '../../../assets/img/popup-bike-4.svg';
import BikeFive from '../../../assets/img/popup-bike-5.svg';
import BikeSix from '../../../assets/img/popup-bike-6.svg';

import Ruble from '../../../assets/img/popup_ruble.svg';
import PopUpComponent from './PopUpComponent';
import PopUpRoute from './PopUpRoute';
import PopUpImg from './PopUpImg';
import PopUpInterested from './PopUpInterested';
import PopUpSecendHead from './PopUpSecendHead';
import PopUpForm from './PopUpForm';
import './Style.scss';
import HOC from '../../hoc/HocPopUp';

function PopUpExc({ setActive, close, active }) {
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
  return (
    <div className={active ? 'popup__bg__exc active' : 'popup__bg__exc'}>
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
          onKeyDown={() => close(setActive)}
          onClick={() => close(setActive)}
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
              RouteText="Смотрова - Джерело - Камінь Джигіта - Адербіївка - Гора Нексис -Грозові Ворота -
                            Шашлики - Цигельський водоспад (чаша кохання) - Форсаж"
              TimeText="4
                            години"
              DistanceText="40 - 50 км"
              complexityText="5***"
            />

            <PopUpImg
              QuadroFirst={QuadroFirst}
              QuadroSecend={QuadroSecend}
            />

            <PopUpInterested
              HeaderText="Що подивимося на маршруті:"
              FirstPartText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue lacus lacus facilisis
                        orci nibh diam. Nisi, a et sit commodo. Pretium sed consectetur risus elementum,
                        habitasse turpis massa."
              SecendPartText="In sit mi aenean volutpat. Quis lectus nunc nam euismod ultrices aenean. Vitae
                        venenatis
                        ut praesent neque sed quam mauris elementum. Risus blandit leo ut nullam egestas et
                        porta. Ut lacus arcu sagittis sit. Gravida et faucibus id tortor augue interdum quam
                        sit
                        diam. Laoreet nulla at et arcu pellentesque massa placerat elit. Adipiscing in
                        nullam
                        ipsum est. In sit mi aenean volutpat. Quis lectus nunc nam euismod ultrices aenean.
                        Vitae venenatis ut praesent neque sed quam mauris elementum. Risus blandit leo ut
                        nullam
                        egestas et porta. Ut lacus arcu sagittis sit."
            />

            <PopUpSecendHead> Вартість екскурсії за 1 квадроцикл:</PopUpSecendHead>

            <PopUpComponent bikes={bikes.Allbikes} />

            <PopUpForm
              online="Бронювання онлайн"
              dateText="Бажана дата"
              howMuch="Кількість осіб"
              phoneNumber="Телефон або WhatsApp"
              backToYou="Як до вас звертатись?"
              book="Забронювати"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOC(PopUpExc);

PopUpExc.propTypes = {
  setActive: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};
