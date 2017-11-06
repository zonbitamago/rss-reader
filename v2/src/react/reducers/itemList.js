'use strict';
import * as actionTypes from '../utils/actionTypes';

const initialAppState = {
  itemList: [],
  loading: false
};

const itemList = (state = initialAppState, action) => {
  if (action.type === actionTypes.ITEMLISTLOAD) {
    console.log('load!');
    return {state, itemList: action.itemList, loading: false}
  } else if (action.type === actionTypes.ITEMLISTLOADING) {
    console.log('loading!');
    return {state, itemList: action.itemList, loading: true}
  } else {
    return state;
  }
}

export default itemList;
