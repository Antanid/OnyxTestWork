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
  const { t } = useTranslation();
  return (
    <section className="section__gift">
      <div className="container">
        <div className="row">
          <GiftHead
            giftH2={t('gift.GiftCertificate')}
            texth5={t('gift.OriginalGift')}
            texth5Part2={t('gift.TextEmotion')}
          />

          <GiftText
            text={t('gift.GiftText')}
          />

          <GiftImg gift={gift} />
          <GiftTimerText
            texth2={t('gift.GiftDiscount')}
            textH3={t('gift.GiftTime')}
          />
          <CountdownTimer countdownTimestampMs={1703339600000} />

        </div>
      </div>
    </section>
  );
}

export default Gift;
