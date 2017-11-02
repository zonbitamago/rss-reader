'use strict';
jest.dontMock('../../actions/index');
jest.dontMock('../../utils/actionTypes');
import * as actions from '../../actions/index';
import * as actionTypes from '../../utils/actionTypes';

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

// test('onRssInputClick', () => {
//   expect(actions.onRssInputClick('name', 'url')).toEqual({type: actionTypes.RSSINPUT, name: 'name', url: 'url'});
// })
