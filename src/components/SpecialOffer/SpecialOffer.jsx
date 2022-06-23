import React from 'react';

import Present from '../../assets/img/present.png';
import House from '../../assets/img/domik.png';
import SpeacialText from './SpeacialText';
import SpecialCartFirst from './SpecialCartFirst';
import SpecialCartSecend from './SpecialCartSecend';

import './sass/Style.scss';

class SpecialOffer extends React.Component {
  render() {
    return (
      <section className="special__offer">
        <div className="container">
          <div className="row">

            <SpeacialText>Спецпропозиції</SpeacialText>

            <SpecialCartFirst
              img={Present}
              textH3="Знижка 10%"
              textSpan="на День Народження"
              textP="на честь Дня Народження - даруємо імениннику знижку 10%"
            />

            <SpecialCartSecend
              img={House}
              textH3="Знижка 10%"
              textP="клієнтам Ex-Karpati на послуги Заміського клубу Ягода Малина"
            />

          </div>
        </div>
      </section>
    );
  }
}

export default SpecialOffer;
