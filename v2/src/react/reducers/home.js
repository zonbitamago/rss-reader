'use strict';
import $ from 'jquery';
import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  home: 'on'
};

const home = (state = initialAppState, action) => {
  if (action.type === actionTypes.HOME) {
    $('html, body').animate({scrollTop: 0});
    console.log('home click!');
    return {state, home: 'on'};
  } else {
    return state;
  }
}

export default home;
