'use strict';
jest.dontMock('../../reducers/rssListModal');
import rssListModal, {save} from '../../reducers/rssListModal';
import * as actionTypes from '../../utils/actionTypes';
import * as constants from '../../utils/constants';

const initialAppState = {
  rssListModalOpen: false
};

test('rssListModal', () => {
  var action = {
    type: actionTypes.RSSLISTMODAL
  };
  var rssListModalAction = rssListModal(initialAppState, action);
  expect(rssListModalAction).toEqual({rssListModalOpen: true, state: initialAppState, urlList: {}});
})

// test('rssInput', () => {
//   var action = {
//     type: actionTypes.RSSINPUT,
//     name: 'name',
//     url: 'url'
//   };
//   var rssListModalAction = rssListModal(initialAppState, action);
//
//   expect(rssListModalAction).toEqual({
//     rssListModalOpen: false,
//     state: initialAppState,
//     urlList: {
//       name: 'name',
//       url: 'url'
//     }
//   });
// })

describe('functions', () => {
  test('引数を受け取って、rssListを保存する。', () => {
    localStorage.rssList = undefined;
    save('name1', 'http://www.feedforall.com/sample-feed.xml');
    var rssList = JSON.parse(localStorage.rssList);
    expect(rssList).toEqual([
      {
        name: 'name1',
        url: 'http://www.feedforall.com/sample-feed.xml'
      }
    ]);

    localStorage.rssList = undefined;
    save('name2', 'http://www.feedforall.com/sample.xml');
    var rssList = JSON.parse(localStorage.rssList);
    expect(rssList).toEqual([
      {
        name: 'name2',
        url: 'http://www.feedforall.com/sample.xml'
      }
    ]);

    localStorage.rssList = undefined;
    save('name1', 'http://www.feedforall.com/sample-feed.xml');
    save('name2', 'http://www.feedforall.com/sample.xml');
    var rssList = JSON.parse(localStorage.rssList);
    expect(rssList).toEqual([
      {
        name: 'name1',
        url: 'http://www.feedforall.com/sample-feed.xml'
      }, {
        name: 'name2',
        url: 'http://www.feedforall.com/sample.xml'
      }
    ]);

  });

  test('重複した内容のrssListを保存する', () => {
    localStorage.rssList = undefined;
    save('name1', 'http://www.feedforall.com/sample-feed.xml');
    save('name2', 'http://www.feedforall.com/sample.xml');
    save('name2', 'http://www.feedforall.com/sample.xml');
    var rssList = JSON.parse(localStorage.rssList);
    expect(rssList).toEqual([
      {
        name: 'name1',
        url: 'http://www.feedforall.com/sample-feed.xml'
      }, {
        name: 'name2',
        url: 'http://www.feedforall.com/sample.xml'
      }
    ]);
  });

  test('引数で受け取ったURLが有効かを確認する。', () => {
    localStorage.rssList = undefined;
    save('name1', 'http://www.feedforall.com/sample-feed.xml');
    var rssList = JSON.parse(localStorage.rssList);
    expect(rssList).toEqual([
      {
        name: 'name1',
        url: 'http://www.feedforall.com/sample-feed.xml'
      }
    ]);

    localStorage.rssList = undefined;
    save('name2', 'NG');
    expect(localStorage.rssList).toEqual(undefined);

    localStorage.rssList = undefined;
    save('name1', 'http://www.feedforall.com/sample-feed.xml');
    save('name2', 'NG');
    var rssList = JSON.parse(localStorage.rssList);
    expect(rssList).toEqual([
      {
        name: 'name1',
        url: 'http://www.feedforall.com/sample-feed.xml'
      }
    ]);

  });
});

test('else', () => {
  var action = {
    type: 'else'
  };
  var elseaction = rssListModal(initialAppState, action);
  expect(elseaction).toEqual(initialAppState);
});
