'use strict';

import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';

import reducer from './reducers/init';
import App from './containers/app.jsx'

const logger = createLogger();
const middleware = [thunk, promise, logger];
const store = createStore(reducer, applyMiddleware(...middleware));

const rootDom = document.getElementById("root-dom");
ReactDOM.render(
  <Provider store={store}>

  <App store={store}/>
</Provider>, rootDom);
