import React from 'react';
import Buttons from '../Button/Buttons';
import TestText from './TestText';

import './Style.scss';

class Test extends React.Component {
  render() {
    return (
      <section className="section_test">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="test">
                <TestText
                  textH3="Важко вибрати маршрут?"
                  textH5="Пройдіть тест і ми допоможемо вам підібрати оптимальну під вас
                                екскурсію"
                />
                <div className="test__button">
                  <Buttons className="test__butt">Почати тест</Buttons>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Test;
