import React from 'react';
import { useTranslation } from 'react-i18next';

import Present from '../../assets/img/present.png';
import House from '../../assets/img/domik.png';
import SpeacialText from './SpeacialText';
import SpecialCartFirst from './SpecialCartFirst';
import SpecialCartSecend from './SpecialCartSecend';

import './sass/Style.scss';

function specialOffer() {
  const { t } = useTranslation('', { keyPrefix: 'specialOffer' });
  return (
    <section className="special__offer">
      <div className="container">
        <div className="row">

          <SpeacialText>
            {t('FirstCartMainText')}
          </SpeacialText>

          <SpecialCartFirst
            img={Present}
            textH3={t('CartDiscount')}
            textSpan={t('FirstCartSpan')}
            textP={t('FirstCartBirthday')}
          />

          <SpecialCartSecend
            img={House}
            textH3={t('CartDiscount')}
            textP={t('SecondCartText')}
          />

        </div>
      </div>
    </section>
  );
}

export default specialOffer;
