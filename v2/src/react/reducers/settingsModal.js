'use strict';

import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  settingsModalOpen: false,
  updateDuration: getSettings().updateDuration
};

const settingsModal = (state = initialAppState, action) => {
  if (action.type === actionTypes.SETTINGSMODAL) {
    return {
      state,
      settingsModalOpen: !state.settingsModalOpen,
      updateDuration: state.updateDuration
    };
  } else if (action.type === actionTypes.SETSETTINGS) {
    setSettings(action.updateDuration);
    return {
      state,
      settingsModalOpen: false,
      updateDuration: getSettings().updateDuration
    };

  } else {
    return state;
  }

};

var setSettings = (updateDuration) => {
  localStorage.setItem('settings', JSON.stringify({updateDuration: updateDuration}));
}

export function getSettings() {
  if (localStorage.getItem('settings') == undefined) {
    return ({updateDuration: 5});
  }

  return JSON.parse(localStorage.getItem('settings'));
}

export default settingsModal;
