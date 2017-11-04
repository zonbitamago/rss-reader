'use strict';
import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  itemList: []
};

const itemList = (state = initialAppState, action) => {
  if (action.type === actionTypes.ITEMLISTLOAD) {
    return {state, itemList: action.itemList}
  } else {
    return state;
  }
}

export default itemList;
