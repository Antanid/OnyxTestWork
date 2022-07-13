import React from 'react';
import { useTranslation } from 'react-i18next';

import gift from '../../assets/img/GiftImg.svg';
import CountdownTimer from '../CountdownTimer/CountdownTimer';
import GiftHead from './GiftHead';
import GiftImg from './GiftImg';
import GiftText from './GiftText';
import GiftTimerText from './GiftTimerText';

import './sass/Style.scss';

function Gift() {
  const { t } = useTranslation('', { keyPrefix: 'gift' });
  return (
    <section className="section__gift">
      <div className="container">
        <div className="row">
          <GiftHead
            giftH2={t('GiftCertificate')}
            texth5={t('OriginalGift')}
            texth5Part2={t('TextEmotion')}
          />

          <GiftText
            text={t(' GiftText')}
          />

          <GiftImg gift={gift} />
          <GiftTimerText
            texth2={t('GiftDiscount')}
            textH3={t('GiftTime')}
          />
          <CountdownTimer countdownTimestampMs={1703339600000} />

        </div>
      </div>
    </section>
  );
}

export default Gift;
