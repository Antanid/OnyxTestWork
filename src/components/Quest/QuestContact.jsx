import React from 'react';
import PropTypes from 'prop-types';
import QuestButton from './QuestButton';

function QuestContact({ QuestImg, contactText, haveQuestions }) {
  return (
    <div className="col-lg-6">
      <div className="section__dialog">
        <img src={QuestImg} alt="questions" />
      </div>

      <div className="dialog__text">
        <h4 className="dialog__text__h4">
          {haveQuestions}
        </h4>
        <h5 className="dialog__text__h5">{contactText}</h5>
        <QuestButton />
      </div>
    </div>
  );
}

export default QuestContact;

QuestContact.propTypes = {
  contactText: PropTypes.string.isRequired,
  haveQuestions: PropTypes.string.isRequired,
  QuestImg: PropTypes.string.isRequired,
};
