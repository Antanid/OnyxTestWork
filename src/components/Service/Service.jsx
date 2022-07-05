import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import servicePhoto from '../../assets/img/ServicICON.svg';
import ServiceText from './ServiceText';
import ServiceHead from './ServiceHead';
import ServiceSpanText from './ServiceSpanText';

import './sass/Style.scss';

function Service() {
  const [InfoService] = useState({
    serviceTextWithoutSpan: [
      {
        id: 1,
        text:
          'service.FirstText',
        img: servicePhoto
      },
      {
        id: 2,
        text:
          'service.SecendText',
        img: servicePhoto
      },
      {
        id: 3,
        text:
          'service.ThirdText',
        img: servicePhoto
      },
      {
        id: 4,
        text:
          'service.FourthText',
        img: servicePhoto
      },
    ],
    serviceTextWithSpan: [
      {
        textAfter: 'service.FirstTextAfter',
        span: 'service.FirstTextSpan',
        textBefore: 'service.FirstTextBefore',
        img: servicePhoto
      },
      {
        textAfter: 'service.SecondTextAfter',
        span: 'service.SecondTextSpan',
        textBefore: 'service.SecendTextBefore',
        img: servicePhoto
      },
    ]
  });
  const { t } = useTranslation();
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <ServiceHead>{t('service.ConditionsText')}</ServiceHead>
          <ServiceSpanText textSpan={InfoService.serviceTextWithSpan} />
          <ServiceText text={InfoService.serviceTextWithoutSpan} />
        </div>
      </div>
    </section>
  );
}

export default Service;
