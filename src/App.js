import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SecendPage from './pages/SecendPage/SecendPage';
import AllHead from './components/AllHead';
import Layout from './Layout/Layout';
import ThemeProvider from './Сontext/ThemeProvider';
import ButtonTheme from './components/ThemeButton/buttonTheme';
import HocThemeState from './hocs/hocThemeState';

function App({ theme, toggleTheme }) {
  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <ButtonTheme toggleTheme={toggleTheme} />
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
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
