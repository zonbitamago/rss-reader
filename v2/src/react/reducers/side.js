'use strict';
import {ipcRenderer} from 'electron';
import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  power: 'on'
};

const side = (state = initialAppState, action) => {
  if (action.type === actionTypes.SHUTDOWN) {
    ipcRenderer.send('closeApp');
    return {state, power: 'off'};
  } else if (action.type === actionTypes.MINIMIZE) {
    ipcRenderer.send('minimizeApp');
    return {state, power: state.power};
  } else if (action.type === actionTypes.OPEN_GITHUB) {
    ipcRenderer.send('openBrowser', 'https://github.com/zonbitamago/rss-reader/blob/master/README.md');
    return {state, power: state.power};
  } else {
    return state;
  }
};

export default side;
