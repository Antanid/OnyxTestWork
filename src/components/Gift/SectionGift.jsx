import React from "react";

import gift from "../../assets/img/GiftImg.svg";
import CountdownTimer from "../CountdownTimer/CountdownTimer";
import GiftHead from "./GiftHead";
import GiftImg from "./GiftImg";
import GiftText from "./GiftText";
import GiftTimerText from "./GiftTimerText";

class Gift extends React.Component {
    render() {
        return (
            <section className="section__gift">
                <div className="container">
                    <div className="row">
                        <GiftHead
                            giftH2='Подарунковий сертифікат'
                            texth5='Бажаєте зробити оригінальний подарунок?'
                            texth5Part2='Подаруйте незабутні емоції – найкращий подарунок!'
                        />

                        <GiftText text='Бажаєте здивувати своїх близьких оригінальним подарунком? Подарунковий сертифікат на екскурсію
                            на квадроциклах стане не просто цікавим подарунком, а реальною можливістю
                            наблизити Ваших друзів та близьких до нового захоплення.'/>

                        <GiftImg gift={gift} />
                        <GiftTimerText
                            texth2='Встигни забрати акцію!'
                            textH3='Залишилось лише:' />
                        <CountdownTimer countdownTimestampMs={1703339600000} />

                    </div>
                </div>
            </section>
        )
    }
}

export default Gift;