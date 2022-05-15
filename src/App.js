import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import './App.css';
import SecendPage from './components/SecendPage/SecendPage';
import { Route, Routes } from 'react-router-dom';
import Head from './components/Head/Head';
import AllHead from './components/AllHead';




function App() {

  return (
    <div className="wrapper">
      <Head />
      <Routes>
        <Route path='/' element={<AllHead />} />
        <Route path='homeWork' element={<SecendPage />} />
      </Routes>



    </div>
  );
}

export default App;
