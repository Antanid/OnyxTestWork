import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function Quest({ toggle, clicked, QuestionText }) {
  const { t } = useTranslation();
  return (
    <div className="accordions">
      {
        QuestionText.map((item, index) => (
          <div
            key={item.id}
            className="item"
          >
            <div
              tabIndex={0}
              role="button"
              onKeyDown={() => toggle(index)}
              onClick={() => toggle(index)}
              className="accordion-item"
            >
              <div className={clicked === index ? 'accordion-item-header active' : 'accordion-item-header'}>
                <p>{t(item.actualTask)}</p>
              </div>
            </div>

            <div className={clicked === index ? 'accordion-item-body.active' : 'accordion-item-body'}>
              <div className="accordion-item-body-content">
                <p>
                  {' '}
                  {t(item.answer)}
                </p>
              </div>
            </div>

          </div>
        ))
      }
    </div>
  );
}

export default Quest;

Quest.propTypes = {
  QuestionText: PropTypes.arrayOf(PropTypes.shape({
    actualTask: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  toggle: PropTypes.func.isRequired,
  clicked: PropTypes.number,
};

Quest.defaultProps = {
  clicked: null
};
