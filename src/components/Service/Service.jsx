import React, { useState } from 'react';

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
          'При прокаті або оренді суворо дотримуватися правил техніки безпеки та все вимоги інструктора!',
        img: servicePhoto
      },
      {
        id: 2,
        text:
          ' Управління здійснюйте у міру своїх сил та можливостей. Не переоцінюйте себе! Це небезпечно!',
        img: servicePhoto
      },
      {
        id: 3,
        text:
          `Перед кожним катанням досвідчений інструктор навчить 
        Вас основ управління та буде супроводжувати протягом усього маршруту.`,
        img: servicePhoto
      },
      {
        id: 4,
        text:
          'При прокаті або оренді суворо дотримуватися правил техніки безпеки та все вимоги інструктора!',
        img: servicePhoto
      },
    ],
    serviceTextWithSpan: [
      {
        textAfter: 'До управління ',
        span: 'НЕ ДОПУСКАЮТЬСЯ',
        extBefore: "особи молодше 16 років та особи в алкогольному сп'яніння!",
        img: servicePhoto
      },
      {
        textAfter: 'Розпивати спиртні напої під час прокату, оренди',
        span: 'ЗАБОРОНЕНО!',
        textBefore: '(Після?) На ваш розсуд',
        img: servicePhoto
      },
    ]
  });
  return (
    <section className="services">
      <div className="container">
        <div className="row">
          <ServiceHead>Умови надання послуг</ServiceHead>
          <ServiceSpanText textSpan={InfoService.serviceTextWithSpan} />
          <ServiceText text={InfoService.serviceTextWithoutSpan} />
        </div>
      </div>
    </section>
  );
}

export default Service;
