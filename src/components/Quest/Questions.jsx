import React, { useState } from "react";

import Quest from "../../assets/img/QuestDialog.svg";
import QuestAccordion from "./Accordion/QuestAccordion";
import QuestAdditional from "./QuestAdditional";
import QuestContact from "./QuestContact";
import QuestHeader from "./QuestHeader";

const Questions = () => {



    const [quest] = useState({
        questionsText: [
            {
                actualTask: 'Актуальне питання? ',
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
    });

    return (
        <section className="section__questions">
            <div className="container">
                <div className="row">
                    <QuestHeader>Питання-відповіді</QuestHeader>
                    <QuestAccordion items={quest.questionsText} />
                    <QuestContact
                        contactText='Не соромтеся звертатися до нас, Якщо у вас є будь-які питання, пропозиції або ідеї для співпраці'
                        haveQuestions='Є питання?'
                        QuestImg={Quest}
                        buttonText='Задати питання'
                    />
                    <QuestAdditional>Додаткові послуги</QuestAdditional>
                </div>
            </div>
        </section>
    );
}

export default Questions;