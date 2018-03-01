'use strict';
jest.dontMock('../../reducers/settingsModal');

import settingsModal, {getSettings} from '../../reducers/settingsModal';
import * as actionTypes from '../../utils/actionTypes';

const initialAppState = {
  settingsModalOpen: false,
  updateDuration: 5
};

beforeEach(() => {
  localStorage.clear();
});

describe('reducers', () => {

  test('settingsModal', () => {
    var action = {
      type: actionTypes.SETTINGSMODAL
    };
    var settingsModalAction = settingsModal(initialAppState, action);
    expect(settingsModalAction).toEqual({settingsModalOpen: true, updateDuration: initialAppState.updateDuration, state: initialAppState});

  });

  test('setSettings', () => {
    var action = {
      type: actionTypes.SETSETTINGS,
      updateDuration: 6
    };
    var settingsModalAction = settingsModal(initialAppState, action);
    expect(settingsModalAction).toEqual({settingsModalOpen: false, updateDuration: action.updateDuration, state: initialAppState});

  });

  test('else', () => {
    var action = {
      type: 'else'
    };
    var settingsModalAction = settingsModal(undefined, action);
    expect(settingsModalAction).toEqual(initialAppState);
  });

});

describe('functios', () => {
  test('getSettings 未設定時', () => {
    var settings = getSettings();
    expect(settings.updateDuration).toEqual(5);
  });

  test('getSettings 設定済み', () => {
    localStorage.setItem('settings', JSON.stringify({updateDuration: 3}));

    var settings = getSettings();
    expect(settings.updateDuration).toEqual(3);

  })

});
