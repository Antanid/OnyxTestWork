import React from 'react';
import { useTranslation } from 'react-i18next';

import Present from '../../assets/img/present.png';
import House from '../../assets/img/domik.png';
import SpeacialText from './SpeacialText';
import SpecialCartFirst from './SpecialCartFirst';
import SpecialCartSecend from './SpecialCartSecend';

import './sass/Style.scss';

function SpecialOffer() {
  const { t } = useTranslation();
  return (
    <section className="special__offer">
      <div className="container">
        <div className="row">

          <SpeacialText>
            {t('specialOffer.FirstCartMainText')}
          </SpeacialText>

          <SpecialCartFirst
            img={Present}
            textH3={t('specialOffer.CartDiscount')}
            textSpan={t('specialOffer.FirstCartSpan')}
            textP={t('specialOffer.FirstCartBirthday')}
          />

          <SpecialCartSecend
            img={House}
            textH3={t('specialOffer.CartDiscount')}
            textP={t('specialOffer.SecondCartText')}
          />

        </div>
      </div>
    </section>
  );
}

export default SpecialOffer;
