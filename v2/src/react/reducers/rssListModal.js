'use strict';
import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  rssListModalOpen: false
};

const rssListModal = (state = initialAppState, action) => {
  if (action.type === actionTypes.RSSLISTMODAL) {
    console.log('rssListModalClick!');
    return {
      state,
      rssListModalOpen: !state.open
    };
  } else {
    return state;
  }
}

export default rssListModal;
