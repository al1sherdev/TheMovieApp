import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './components/App/Routing';
import { APIKEY } from './context/config';
import './style/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <APIKEY.Provider value={'68c09e72a4a3141b02d8c9351b40ea78'}>
    <Routing />
  </APIKEY.Provider>
);