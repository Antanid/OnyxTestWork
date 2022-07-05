import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function PreEndView({ footerLi }) {
  const { t } = useTranslation();
  return (
    <div className="col-lg-10 col-sm-6">
      <div className="footer__all">
        <div className="footer__menu">
          <ul>
            {
              footerLi.map((item) => (
                <li key={item.id}><a href={item.href}>{t(item.text)}</a></li>
              ))
            }
          </ul>
        </div>
      </div>

    </div>
  );
}

export default PreEndView;

PreEndView.defaultProps = {
  footerLi: PropTypes.arrayOf(PropTypes.shape({
    text: 'PreEnd Text'
  }))
};

PreEndView.propTypes = {
  footerLi: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  }))
};
