'use strict';
jest.dontMock('../../reducers/side');
import side from '../../reducers/side';
import * as actionTypes from '../../utils/actionTypes';

const initialAppState = {
  power: 'on'
}
describe('reducers', () => {

  test('shutdown', () => {
    var action = {
      type: actionTypes.SHUTDOWN
    }
    var shutdown = side(initialAppState, action);
    expect(shutdown).toEqual({power: 'off', state: initialAppState});
  });

  test('minimize', () => {
    var action = {
      type: actionTypes.MINIMIZE
    }
    var minimize = side(initialAppState, action);
    expect(minimize).toEqual({power: 'on', state: initialAppState});
  });

  test('open_github', () => {
    var action = {
      type: actionTypes.OPEN_GITHUB
    }
    var open_github = side(initialAppState, action);
    expect(open_github).toEqual({power: 'on', state: initialAppState});

  });

  test('else', () => {
    var action = {
      type: 'else'
    }
    var elseaction = side(initialAppState, action);
    expect(elseaction).toEqual(initialAppState);
  });
});
