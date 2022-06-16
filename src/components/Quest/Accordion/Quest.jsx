import React from 'react';
import PropTypes from 'prop-types';

function Quest({ toggle, clicked, items }) {
  return (
    <div className="accordions">
      {
        items.map((item, index) => (
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
                <p>{item.actualTask}</p>
              </div>
            </div>

            <div className={clicked === index ? 'accordion-item-body.active' : 'accordion-item-body'}>
              <div className="accordion-item-body-content">
                <p>
                  {' '}
                  {item.answer}
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
  items: PropTypes.arrayOf(PropTypes.shape({
    actualTask: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  })).isRequired,
  toggle: PropTypes.func.isRequired,
  clicked: PropTypes.func,
};

Quest.defaultProps = {
  clicked: null
};
