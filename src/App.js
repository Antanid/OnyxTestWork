import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SecendPage from './components/SecendPage/SecendPage';
import AllHead from './components/AllHead';
import Layout from './Layout/Layout';
import ModalProvider from './components/Context/ModalProvider';

function App() {
  return (
    <ModalProvider>
      <div className="wrapper">
        <Layout>
          <Routes>
            <Route path="/" element={<AllHead />} />
            <Route path="homeWork" element={<SecendPage />} />
          </Routes>
        </Layout>
      </div>
    </ModalProvider>
  );
}

export default App;
