import React from 'react';
import { Link } from "react-router-dom";
import Buttons from '../Button/Buttons';
import PropTypes from 'prop-types';


class HeadMenu extends React.Component {
    render() {
        const { number, phone, handleClick, setActive, burger, setBurger } = this.props;
        return (
            <div className="col-lg-10 col-xs-12">
                <div className="nav">
                    <div className={burger ? "menu__body _active" : "menu__body"}>
                        <ul
                            onClick={() => setBurger(false)}
                            className="nav__ul">
                            <li><Link to='/homeWork'>Таблица</Link></li>
                            <li><a href="#photo__h2">Галерея</a></li>
                            <li><a href="#questions__head">Питання-відповідь </a></li>
                            <li><a href="#contacts__h3">Контакти</a></li>
                            <li onClick={() => setActive(true)} ><a onClick={handleClick} href="/" className="popup_open">Забронювати</a></li>
                        </ul>

                        <div className="nav__number">
                            <div className="number__call">
                                <p className="number__p"><img src={phone} alt="phone" />{number}</p>
                                <Buttons className={"number__button"}>Передзвоніть мені</Buttons>
                            </div>
                        </div>
                    </div>

                    <div
                        onClick={() => setBurger(!burger)}
                        className={burger ? "menu__icon _active" : "menu__icon"}>
                        <span ></span>
                    </div>

                </div>
            </div>
        )
    }
}

export default HeadMenu;

HeadMenu.propTypes = {
    number: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    setActive: PropTypes.func,
    burger: PropTypes.bool,
    setBurger: PropTypes.func,
}
