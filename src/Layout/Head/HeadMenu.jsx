import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Buttons from '../../components/Button/Buttons';

function HeadMenu({
  number,
  phone,
  OpenPopUp,
  burger,
  setBurger
}) {
  return (
    <div className="col-lg-10 col-xs-12">
      <div className="nav">
        <div className={burger ? 'menu__body _active' : 'menu__body'}>
          <div
            tabIndex={0}
            role="button"
            onKeyDown={() => setBurger(false)}
            onClick={() => setBurger(false)}
          >
            <ul
              className="nav__ul"
            >
              <li><Link to="/homeWork">Таблица</Link></li>
              <li><a href="#photo__h2">Галерея</a></li>
              <li><a href="#questions__head">Питання-відповідь </a></li>
              <li><a href="#contacts__h3">Контакти</a></li>
              <li>
                <a
                  onKeyDown={OpenPopUp}
                  onClick={OpenPopUp}
                  href="/"
                  className="popup_open"
                >
                  Забронювати
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__number">
            <div className="number__call">
              <p className="number__p">
                <img src={phone} alt="phone" />
                {number}
              </p>
              <Buttons className="number__button">Передзвоніть мені</Buttons>
            </div>
          </div>
        </div>
        <div
          role="button"
          tabIndex={0}
          onKeyDown={() => setBurger(!burger)}
          onClick={() => setBurger(!burger)}
          className={burger ? 'menu__icon _active' : 'menu__icon'}
        >
          <span />
        </div>

      </div>
    </div>
  );
}
export default HeadMenu;

HeadMenu.propTypes = {
  number: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  OpenPopUp: PropTypes.func.isRequired,
  burger: PropTypes.bool.isRequired,
  setBurger: PropTypes.func.isRequired,
};
