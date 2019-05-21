import React from 'react';
import ReactDom from 'react-dom';

import './assets/css/base.css' //引入公共样式
import './library/font'

import App from './layouts/App';

import {BrowserRouter} from 'react-router-dom';
  

ReactDom.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.querySelector('#root')
);