// jshint esversion: 9
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));