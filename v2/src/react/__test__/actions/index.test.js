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

// describe('onRssInputClick', () => {
//   test.skip('fetch失敗', () => {
//     var store = mockStore({});
//     const expectedActions = [
//       {
//         type: actionTypes.RSSISLOADING,
//         name: 'name1',
//         url: 'NG'
//       }, {
//         type: actionTypes.RSSINPUT,
//         name: 'name1',
//         url: 'NG',
//         status: constants.FEED_STATUS_ERROR
//       }
//     ]
//     return store.dispatch(actions.onRssInputClick('name1', 'NG')).then(() => {
//        return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     })
//   });
//
//   test('fetch成功-parse失敗');
//
//   test('fetch成功-parse成功');
// });
