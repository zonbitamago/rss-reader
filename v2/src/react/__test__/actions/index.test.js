'use strict';
jest.dontMock('../../actions/index');
jest.dontMock('../../utils/actionTypes');
jest.dontMock('../../utils/constants');
import * as actions from '../../actions/index';
import * as actionTypes from '../../utils/actionTypes';
import * as constants from '../../utils/constants';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const mockStore = configureMockStore([thunk]);

afterEach(() => {
  fetch.resetMocks();
});
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

test('loadingItemList', () => {
  expect(actions.loadingItemList()).toEqual({type: actionTypes.ITEMLISTLOADING});
})

test('onSettingsModalClick', () => {
  expect(actions.onSettingsModalClick()).toEqual({type: actionTypes.SETTINGSMODAL});
});

describe('onRssInputClick', () => {
  test('fetch失敗', () => {
    var store = mockStore({});
    const expectedActions = {
      type: actionTypes.RSSINPUT,
      name: 'name1',
      url: 'NG',
      status: constants.FEED_STATUS_ERROR
    };

    return store.dispatch(actions.onRssInputClick('name1', 'NG')).then((receiveActions) => {
      // return of async actions
      expect(receiveActions).toEqual(expectedActions);
    })
  });

  test('fetch成功-parse失敗', () => {
    var store = mockStore({});
    const expectedActions = {
      type: actionTypes.RSSINPUT,
      name: 'name1',
      url: 'http://example.com/NG',
      status: constants.FEED_STATUS_ERROR
    };

    fetch.mockResponse({hello: 'world'});

    return store.dispatch(actions.onRssInputClick('name1', 'http://example.com/NG')).then((receiveActions) => {
      // return of async actions
      expect(receiveActions).toEqual(expectedActions);
    });

  });

  test('fetch成功-parse成功', () => {
    var store = mockStore({});
    const expectedActions = {
      type: actionTypes.RSSINPUT,
      name: 'name1',
      url: 'http://www.feedforall.com/sample-feed.xml',
      status: constants.FEED_STATUS_SUCCESS
    };

    // fetch.mockResponse({hello: 'world'});

    return store.dispatch(actions.onRssInputClick('name1', 'http://www.feedforall.com/sample-feed.xml')).then((receiveActions) => {
      // return of async actions
      expect(receiveActions).toEqual(expectedActions);
    });
  });

});
