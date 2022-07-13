import React, { useState } from 'react';

import Footer from '../../assets/img/LogoFooter.png';
import PreEndImg from './PreEndImg';
import PreEndView from './PreEndView';

import './sass/Style.scss';

function PreEnd() {
  const [InfoText] = useState(
    [
      {
        text: 'preEnd.RoutePreEnd',
        href: '#our_routes_h2',
        id: 1,
      },
      {
        text: 'preEnd.Gallery',
        href: '#photo__h2',
        id: 2,
      },
      {
        text: 'preEnd.QuestionPreEnd',
        href: '#questions__head',
        id: 3,
      },
      {
        text: 'preEnd.ContactsPreEnd',
        href: '#contacts__h3',
        id: 4,
      },
      {
        text: 'preEnd.ConditionsPreEnd',
        href: '#services__h2',
        id: 5,
      },
      {
        text: 'preEnd.SpecOfferPreEnd',
        href: '#special__offer__h2',
        id: 6,
      }
    ]
  );
  return (
    <section className="section__end">
      <div className="container-fluid">
        <div className="row">
          <PreEndImg Footer={Footer} />
          <PreEndView footerLi={InfoText} />
        </div>
      </div>
    </section>
  );
}

export default PreEnd;
