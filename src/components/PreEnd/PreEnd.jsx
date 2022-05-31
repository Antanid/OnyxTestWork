import React from "react";

import Footer from "../../assets/img/LogoFooter.png";
import PreEndImg from "./PreEndImg";
import PreEndView from "./PreEndView";

import './Style.scss'

class PreEnd extends React.Component {
    constructor() {
        super();

        this.state = {
            Li: [
                { text: 'МАРШРУТЫ', href: '#our_routes_h2' },
                { text: 'ГАЛЕРЕЯ', href: '#photo__h2' },
                { text: 'ВОПРОС-ОТВЕТ', href: '#questions__head' },
                { text: 'КОНТАКТЫ', href: '#contacts__h3' },
                { text: 'УСЛОВИЯ', href: '#services__h2' },
                { text: 'СПЕЦПРЕДЛОЖЕНИЯ', href: '#special__offer__h2' }
            ]
        }

    }
    render() {
        return (
            <section className="section__end">
                <div className="container-fluid">
                    <div className="row">

                        <PreEndImg Footer={Footer} />

                        <PreEndView footerLi={this.state.Li} />

                    </div>
                </div>
            </section>
        )
    }
}

export default PreEnd;