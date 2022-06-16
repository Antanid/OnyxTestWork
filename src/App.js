import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SecendPage from './components/SecendPage/SecendPage';
/* import Head from './components/Head/Head'; */
import AllHead from './components/AllHead';
import Layout from './Layout/Layout';

function App() {
  return (
    <div className="wrapper">
      <Layout>
        <Routes>
          <Route path="/" element={<AllHead />} />
          <Route path="homeWork" element={<SecendPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
