'use strict';
jest.dontMock('../../reducers/home');
import home from '../../reducers/home';
import * as actionTypes from '../../utils/actionTypes';

const initialAppState = {
  home: 'on'
};
describe('reducers', () => {

  test('home', () => {
    var action = {
      type: actionTypes.HOME
    };
    var homeaction = home(initialAppState, action);
    expect(homeaction).toEqual({home: 'on', state: initialAppState});
  });

  test('else', () => {
    var action = {
      type: 'else'
    };
    var elseaction = home(undefined, action);
    expect(elseaction).toEqual(initialAppState);
  });

});
