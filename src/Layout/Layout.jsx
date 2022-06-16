import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer/Footer';
import Head from '../components/Head/Head';

function Layout({ children }) {
  return (
    <div>
      <Head />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
