import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Quest from './Quest';

function QuestAccordion({ QuestionText }) {
  const [clicked, setClicked] = useState(null);

  const toggle = (index) => {
    setClicked(clicked === index ? null : index);
  };

  return (
    <div className="col-lg-6">
      <div className="accordion">
        <Quest
          toggle={toggle}
          clicked={clicked}
          QuestionText={QuestionText}
        />
      </div>
    </div>

  );
}

export default QuestAccordion;

QuestAccordion.propTypes = {
  QuestionText: PropTypes.arrayOf(PropTypes.shape({
    actualTask: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
};
