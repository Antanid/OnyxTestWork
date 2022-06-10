import React, { useState } from "react";


import Rubl from "../../assets/img/rubl.png";
import Line from "../../assets/img/Line 1.png";
import Time from "../../assets/img/Time.png";
import Location from '../../assets/img/Location.png';
import Complexity from "../../assets/img/complexity.png";
import Route from "../../assets/img/Route.png";

import Qadro from "../../assets/img/baseQadro.svg";
import QadroSecend from "../../assets/img/baseFistOther.svg";
import QadroThird from "../../assets/img/Second2.svg";

import SecendQadroFirst from "../../assets/img/baseFistOther.svg";
import SecendQadroSecend from "../../assets/img/Second2.svg";
import SecendQadroThird from "../../assets/img/Second.svg";
import ThirdQadroFirst from "../../assets/img/ThirdRout.svg";
import ThirdQadroSecend from "../../assets/img/baseFistOther.svg";
import ThirdQadroThird from "../../assets/img/ThirdRout2.svg";
import PopUpExc from "../PopUp/PopUpExc/PopUpExc";
import FirstPage from "./RoutesPage/FirstPage/FirstPage";
import SecendPage from "./RoutesPage/SecendPage/SecendPage";
import ThirdPage from "./RoutesPage/ThirdPage/ThirdPage";
import OurTextH2 from "./OurTextH2";

import './Style.scss'


const MyContext = React.createContext()


function OurRoute() {

    const [active, setActive] = useState(false);
    const [info] = useState({
        firstPage:
        {
            price: 'від 4000',
            time: '1,5 - 2 години',
            distance: '20 - 25 км',
            complexity: '5***',
            route: "Смотрова - Джерело - Камінь Джигіта - Адербіївка - Гора Нексис - -Грозові Ворота - Шашлики - Цигельський водоспад (чаша кохання) - Форсаж"
        },
        secendPage:
        {
            price: 'від 7000 ',
            time: '6 - 8 години',
            distance: '60 - 70 км',
            complexity: '5***',
            route: "Оглядова - Джерело - Камінь Джигіта - Адербіївка - Гора Нексис - -Грозові Ворота - Шашлики - Цигельський водоспад (чаша кохання) - Форсаж"
        },
        thirdPage:
        {
            price: 'від 16000 ',
            time: '4 години',
            distance: '40 - 50 км',
            complexity: '5***',
            route: "Форсаж - Синя бухта – Занедбана Тур База – Суховантаж Ріо  - Форсаж"
        },
    })

    return (
        <MyContext.Provider value={'123'}>
        <article className="our__route">
                <div className="container-fluid">
                    <div className="row">

                        <OurTextH2>Наші маршрути</OurTextH2>

                        <FirstPage
                            Line={Line}
                            setActive={setActive}
                            price={info.firstPage.price}
                            Rubl={Rubl}
                            TimeImg={Time}
                            time={info.firstPage.time}
                            Location={Location}
                            distance={info.firstPage.distance}
                            Complexity={Complexity}
                            InfoComplexity={info.firstPage.complexity}
                            Route={Route}
                            info={info.firstPage.route}
                            Qadro={Qadro}
                            QadroSecend={QadroSecend}
                            QadroThird={QadroThird}
                        />


                        <SecendPage
                            Line={Line}
                            setActive={setActive}
                            price={info.secendPage.price}
                            Rubl={Rubl}
                            TimeImg={Time}
                            time={info.secendPage.time}
                            Location={Location}
                            distance={info.secendPage.distance}
                            Complexity={Complexity}
                            InfoComplexity={info.secendPage.complexity}
                            Route={Route}
                            info={info.secendPage.route}
                            SecendQadroFirst={SecendQadroFirst}
                            SecendQadroSecend={SecendQadroSecend}
                            SecendQadroThird={SecendQadroThird}
                        />

                        <ThirdPage
                            Line={Line}
                            setActive={setActive}
                            price={info.thirdPage.price}
                            Rubl={Rubl}
                            TimeImg={Time}
                            time={info.thirdPage.time}
                            Location={Location}
                            distance={info.thirdPage.distance}
                            Complexity={Complexity}
                            InfoComplexity={info.thirdPage.complexity}
                            Route={Route}
                            info={info.thirdPage.route}
                            ThirdQadroFirst={ThirdQadroFirst}
                            ThirdQadroSecend={ThirdQadroSecend}
                            ThirdQadroThird={ThirdQadroThird}
                        />

                    </div>
                </div>

                <PopUpExc active={active} setActive={setActive} />
        </article>
        </MyContext.Provider>
    );
}

export default OurRoute;