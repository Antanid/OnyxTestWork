import React from 'react';
import { useTranslation } from 'react-i18next';
import Buttons from '../Button/Buttons';
import TestText from './TestText';

import './sass/Style.scss';

function Test() {
  const { t } = useTranslation('', { keyPrefix: 'test' });
  return (
    <section className="section_test">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="test">
              <TestText
                textH3={t('.ChangeRoute')}
                textH5={t('GoTest')}
              />
              <div className="test__button">
                <Buttons className="test__butt">
                  {t('TestButton')}
                </Buttons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
