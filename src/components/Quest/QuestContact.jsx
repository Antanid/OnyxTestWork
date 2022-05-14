import React from 'react'

function QuestContact({ buttonText, QuestImg, contactText, haveQuestions }) {
    return (
        <div className="col-lg-6">
            <div className="section__dialog">
                <img src={QuestImg} alt="questions" />
            </div>

            <div className="dialog__text">
                <h4 className="dialog__text__h4">{haveQuestions}
                </h4>
                <h5 className="dialog__text__h5">{contactText}</h5>

                <div className="dialog__butt__block">
                    <button className="dialog__button">{buttonText}</button>
                </div>
            </div>
        </div>
    )
}

export default QuestContact