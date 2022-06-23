import React from 'react';

import servicePhoto from '../../assets/img/ServicICON.svg';
import ServiceText from './ServiceText';
import ServiceHead from './ServiceHead';
import ServiceSpanText from './ServiceSpanText';

import './sass/Style.scss';

class Service extends React.Component {
  constructor() {
    super();
    this.state = {
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
    };
  }

  render() {
    const { serviceTextWithSpan, serviceTextWithoutSpan } = this.state;
    return (
      <section className="services">
        <div className="container">
          <div className="row">
            <ServiceHead>Умови надання послуг</ServiceHead>
            <ServiceSpanText textSpan={serviceTextWithSpan} />
            <ServiceText text={serviceTextWithoutSpan} />
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
