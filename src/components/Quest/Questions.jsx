import React, { useState } from "react";

import Quest from "../../assets/img/QuestDialog.svg";
import Question from "./Quest";

const Questions = () => {

    const [accordion, setAccordion] = useState(false);
    const items = [
        {
            actualTask: 'Актуальне питання?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            actualTask: 'Актуальне питання?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            actualTask: 'Актуальне питання?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            actualTask: 'Актуальне питання?',
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book."
        },
    ]

    return (
        <section className="section__questions">
            <div className="container">
                <div className="row">

                    <div className="col-lg-12">
                        <div id="questions__head" className="questions__head">
                            <h2>Питання-відповіді
                            </h2>
                        </div>
                    </div>


                    <div className="col-lg-6">
                        <div className="accordion">

                           <Question items={items}/>
                        

                            {/* <div className="accordion-item">
                                <div className="accordion-item-header">Актуальне питання?</div>

                                <div className="accordion-item-body">
                                    <div className="accordion-item-body-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <div className="accordion-item-header">Актуальне питання?</div>

                                <div className="accordion-item-body">
                                    <div className="accordion-item-body-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <div className="accordion-item-header">Актуальне питання?</div>

                                <div className="accordion-item-body">
                                    <div className="accordion-item-body-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-item">
                                <div className="accordion-item-header">Актуальне питання?</div>

                                <div className="accordion-item-body">
                                    <div className="accordion-item-body-content">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen
                                        book.
                                    </div>
                                </div>
                            </div> */}

                        </div>


                    </div>

                    <div className="col-lg-6">
                        <div className="section__dialog">
                            <img src={Quest} alt="questions" />
                        </div>

                        <div className="dialog__text">
                            <h4 className="dialog__text__h4">Є питання?
                            </h4>
                            <h5 className="dialog__text__h5">Не соромтеся звертатися до нас, <b />
                                Якщо у вас є
                                будь-які
                                питання, пропозиції <br /> або ідеї для співпраці
                            </h5>

                            <div className="dialog__butt__block">
                                <button className="dialog__button">Задати питання</button>
                            </div>
                        </div>



                    </div>

                    <div className="col-lg-12">
                        <div className="Additional">
                            <h4>Додаткові послуги</h4>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
}

export default Questions;