import React from 'react';

import Elipse from '../../assets/img/Ellipse_Green.png';
import Tree from '../../assets/img/Tree.png';
import Bike from '../../assets/img/quad_bike.png';
import Helmet from '../../assets/img/helmet.png';
import OurAdvComponent from './OurAdvComponent';

import './Style.scss';

class OurAdvantages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      adventures: [
        {
          id: 1,
          fisrtText: 'Цікаві екскурсії',
          secendText: 'Маршрути від лісових доріжок до бездоріжжя!',
          img: Tree,
          elipse: Elipse
        },
        {
          id: 2,
          fisrtText: 'Цікаві екскурсії',
          secendText: 'Маршрути від лісових доріжок до бездоріжжя!',
          img: Bike,
          elipse: Elipse
        },
        {
          id: 3,
          fisrtText: 'Цікаві екскурсії',
          secendText: 'Маршрути від лісових доріжок до бездоріжжя!',
          img: Helmet,
          elipse: Elipse
        },
        {
          id: 4,
          fisrtText: 'Цікаві екскурсії',
          secendText: 'Маршрути від лісових доріжок до бездоріжжя!',
          img: Helmet,
          elipse: Elipse
        }
      ]
    };
  }

  render() {
    const { adventures } = this.state;
    return (
      <article className="our-advantages">
        <div className="container-fluid">
          <div className="row">
            <OurAdvComponent routes={adventures} />
          </div>
        </div>
      </article>

    );
  }
}

export default OurAdvantages;
