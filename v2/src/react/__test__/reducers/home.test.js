'use strict';
jest.dontMock('../../reducers/home');
import home from '../../reducers/home';
import * as actionTypes from '../../utils/actionTypes';

const initialAppState = {
  home: 'on'
};

test('home', () => {
  var action = {
    type: actionTypes.HOME
  };
  var homeaction = home(initialAppState, action);
  expect(homeaction).toEqual({home:'on',state:initialAppState});
});

test('else', () => {
  var action = {
    type: 'else'
  };
  var elseaction = home(initialAppState, action);
  expect(elseaction).toEqual(initialAppState);
});
