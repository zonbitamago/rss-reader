'use strict';

import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  settingsModalOpen: false
};

const settingsModal = (state = initialAppState, action) => {
  if (action.type === actionTypes.SETTINGSMODAL) {
    return {
      state,
      settingsModalOpen: !state.settingsModalOpen
    };
  } else {
    return state;
  }

};

export default settingsModal;
