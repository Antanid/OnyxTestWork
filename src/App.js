import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Head from './components/Head';
import AllHead from './components/AllHead';




function App() {

  return (
    <div className="wrapper">
      <Head />
      <AllHead />
    </div>
  );
}

export default App;
