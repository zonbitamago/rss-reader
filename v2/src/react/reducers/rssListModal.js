'use strict';
import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  rssListModalOpen: false
};

const rssListModal = (state = initialAppState, action) => {
  if (action.type === actionTypes.RSSLISTMODAL) {
    return {
      state,
      rssListModalOpen: !state.rssListModalOpen
    };
  } else if (action.type === actionTypes.RSSINPUT) {
    console.log('rssInputClick!');
    return {
      state,
      rssListModalOpen: state.rssListModalOpen
    };
  } else {
    return state;
  }
};

export default rssListModal;
