import React from 'react';
import PropTypes from 'prop-types';
import './sass/Style.scss';

function FooterView({ children }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer__text">
              <h3>
                {children}
              </h3>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default FooterView;

FooterView.propTypes = {
  children: PropTypes.string.isRequired,
};
