'use strict';

import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'

const rootDom = document.getElementById("root-dom");
ReactDOM.render(
  <App/>, rootDom);
