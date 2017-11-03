'use strict';
jest.dontMock('../../actions/index');
jest.dontMock('../../utils/actionTypes');
import * as actions from '../../actions/index';
import * as actionTypes from '../../utils/actionTypes';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk]);

test('onShutDownClick', () => {
  expect(actions.onShutDownClick()).toEqual({type: actionTypes.SHUTDOWN});
});

test('onMimizeClick', () => {
  expect(actions.onMimizeClick()).toEqual({type: actionTypes.MINIMIZE});
});

test('onOpenGithubClick', () => {
  expect(actions.onOpenGithubClick()).toEqual({type: actionTypes.OPEN_GITHUB});
});

test('onHomeClick', () => {
  expect(actions.onHomeClick()).toEqual({type: actionTypes.HOME});
});

test('onRssListModalClick', () => {
  expect(actions.onRssListModalClick()).toEqual({type: actionTypes.RSSLISTMODAL});
})

test('onRssListDeleteClick', () => {
  expect(actions.onRssListDeleteClick('name', 'url')).toEqual({type: actionTypes.RSSLISTDELETE, name: 'name', url: 'url'});
});

test('onRssListURLClick', () => {
  expect(actions.onRssListURLClick('url')).toEqual({type: actionTypes.OPEN_RSSURL, url: 'url'});
});

describe('onRssInputClick',() => {
  test('fetch失敗');

  test('fetch成功-parse失敗');

  test('fetch成功-parse成功');
});
