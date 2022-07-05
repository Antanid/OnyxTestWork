import React from 'react';

import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SecendPage from './pages/SecendPage/SecendPage';
import AllHead from './components/AllHead';
import Layout from './Layout/Layout';
import ThemeProvider from './Сontext/ThemeProvider';
import HocThemeState from './hocs/hocThemeState';
import ControlPanel from './Layout/Head/ControlPanel';

function App({ theme, toggleTheme, test }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <ControlPanel
          test={test}
          toggleTheme={toggleTheme}
        />
        <Layout>
          <Routes>
            <Route path="/" element={<AllHead />} />
            <Route path="homeWork" element={<SecendPage />} />
          </Routes>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default HocThemeState(App);

App.propTypes = {
  test: PropTypes.bool.isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
