'use strict';

import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/init';
import App from './containers/app.jsx'

const store = createStore(reducer)

const rootDom = document.getElementById("root-dom");
ReactDOM.render(
  <Provider store={store}>

  <App/>
</Provider>, rootDom);
