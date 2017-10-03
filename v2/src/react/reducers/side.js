import * as actionTypes from '../utils/actionTypes';

const initialNum = 0;
const initialAppState = {
  power: 'on'
};

const counter = (state = initialAppState, action) => {
  if (action.type === actionTypes.SHUTDOWN) {
    return {state, power: 'off'};
  } else {
    return state;
  }
};

export default side;
