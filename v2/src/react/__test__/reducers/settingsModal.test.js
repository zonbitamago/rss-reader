'use strict';
jest.dontMock('../../reducers/settingsModal');

import settingsModal from '../../reducers/settingsModal';
import * as actionTypes from '../../utils/actionTypes';

const initialAppState = {
  settingsModalOpen: false
};

describe('reducers', () => {

  test('settingsModal', () => {
    var action = {
      type: actionTypes.SETTINGSMODAL
    };
    var settingsModalAction = settingsModal(initialAppState, action);
    expect(settingsModalAction).toEqual({settingsModalOpen: true, state: initialAppState});

  });

  test('else',() => {
    var action = {
      type: 'else'
    };
    var settingsModalAction = settingsModal(undefined,action);
    expect(settingsModalAction).toEqual(initialAppState);
  });

});
