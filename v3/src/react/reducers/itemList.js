'use strict';
import * as actionTypes from '../utils/actionTypes';
import moment from 'moment'

var updated = '';

const initialAppState = {
  itemList: [],
  loading: false,
  updated: updated
};

const itemList = (state = initialAppState, action) => {
  if (action.type === actionTypes.ITEMLISTLOAD) {
    updated = 'updated:' + moment().format('LTS');
    return {state, itemList: action.itemList, loading: false, updated: updated}
  } else if (action.type === actionTypes.ITEMLISTLOADING) {
    return {state, itemList: state.itemList, loading: true, updated: state.updated}
  } else {
    return state;
  }
}

export default itemList;
