'use strict';
jest.dontMock('../../reducers/rssListModal');
import rssListModal, {save, getRssList, deleteRssList} from '../../reducers/rssListModal';
import * as actionTypes from '../../utils/actionTypes';
import * as constants from '../../utils/constants';
import {ipcRenderer} from 'electron';

const initialAppState = {
  rssListModalOpen: false,
  rssList: undefined,
  isLoading: false
};

beforeEach(() => {
  localStorage.clear();
});

describe('reducers', () => {

  test('rssListModal', () => {
    var action = {
      type: actionTypes.RSSLISTMODAL
    };
    var rssListModalAction = rssListModal(initialAppState, action);
    expect(rssListModalAction).toEqual({rssListModalOpen: true, state: initialAppState, rssList: undefined, isLoading: false});
  })

  test('rssInput', () => {
    var action = {
      type: actionTypes.RSSINPUT,
      name: 'name',
      url: 'http://www.feedforall.com/sample-feed.xml'
    };
    var rssListModalAction = rssListModal(initialAppState, action);

    expect(rssListModalAction).toEqual({
      rssListModalOpen: false,
      state: initialAppState,
      rssList: [
        {
          name: 'name',
          url: 'http://www.feedforall.com/sample-feed.xml'
        }
      ],
      isLoading: false
    });
  });

  test('rssLoading', () => {
    var action = {
      type: actionTypes.RSSISLOADING,
      name: 'name',
      url: 'http://www.feedforall.com/sample-feed.xml'
    };
    var rssListModalAction = rssListModal(initialAppState, action);

    expect(rssListModalAction).toEqual({rssListModalOpen: false, state: initialAppState, rssList: undefined, isLoading: true});

  });

  test('rssListDelete', () => {
    localStorage.setItem('rssList', JSON.stringify([
      {
        name: 'name1',
        url: 'url1'
      }
    ]));
    var action = {
      type: actionTypes.RSSLISTDELETE,
      name: 'name1',
      url: 'url1'
    };
    var rssListModalAction = rssListModal(initialAppState, action);

    expect(rssListModalAction).toEqual({rssListModalOpen: false, state: initialAppState, rssList: undefined, isLoading: false});

  });

  test('openRssURL', () => {
    var action = {
      type: actionTypes.OPEN_RSSURL,
      url: 'url'
    };
    var rssListModalAction = rssListModal(initialAppState, action);

    expect(rssListModalAction).toEqual({rssListModalOpen: initialAppState.rssListModalOpen, state: initialAppState, rssList: initialAppState.rssList, isLoading: initialAppState.isLoading});
    expect(ipcRenderer.send).toHaveBeenCalled();

  });

  test('else', () => {
    var action = {
      type: 'else'
    };
    var elseaction = rssListModal(undefined, action);
    expect(elseaction).toEqual(initialAppState);
  });
});

describe('functions', () => {
  describe('保存', () => {

    test('引数を受け取って、rssListを保存する。', () => {
      localStorage.clear();
      save('name1', 'http://www.feedforall.com/sample-feed.xml', constants.FEED_STATUS_SUCCESS);
      var rssList = JSON.parse(localStorage.getItem('rssList'));
      expect(rssList).toEqual([
        {
          name: 'name1',
          url: 'http://www.feedforall.com/sample-feed.xml'
        }
      ]);

      localStorage.clear();
      save('name2', 'http://www.feedforall.com/sample.xml', constants.FEED_STATUS_SUCCESS);
      var rssList = JSON.parse(localStorage.getItem('rssList'));
      expect(rssList).toEqual([
        {
          name: 'name2',
          url: 'http://www.feedforall.com/sample.xml'
        }
      ]);

      localStorage.clear();
      save('name1', 'http://www.feedforall.com/sample-feed.xml', constants.FEED_STATUS_SUCCESS);
      save('name2', 'http://www.feedforall.com/sample.xml', constants.FEED_STATUS_SUCCESS);
      var rssList = JSON.parse(localStorage.getItem('rssList'));
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
      save('name1', 'http://www.feedforall.com/sample-feed.xml', constants.FEED_STATUS_SUCCESS);
      save('name2', 'http://www.feedforall.com/sample.xml', constants.FEED_STATUS_SUCCESS);
      save('name2', 'http://www.feedforall.com/sample.xml', constants.FEED_STATUS_SUCCESS);
      var rssList = JSON.parse(localStorage.getItem('rssList'));
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
      localStorage.clear();
      save('name1', 'http://www.feedforall.com/sample-feed.xml', constants.FEED_STATUS_SUCCESS);
      var rssList = JSON.parse(localStorage.getItem('rssList'));
      expect(rssList).toEqual([
        {
          name: 'name1',
          url: 'http://www.feedforall.com/sample-feed.xml'
        }
      ]);

      localStorage.clear();
      save('name2', 'NG', constants.FEED_STATUS_ERROR);
      expect(localStorage.getItem('rssList')).toEqual(null);

      localStorage.clear();
      save('name1', 'http://www.feedforall.com/sample-feed.xml', constants.FEED_STATUS_SUCCESS);
      save('name2', 'NG', constants.FEED_STATUS_ERROR);
      var rssList = JSON.parse(localStorage.getItem('rssList'));
      expect(rssList).toEqual([
        {
          name: 'name1',
          url: 'http://www.feedforall.com/sample-feed.xml'
        }
      ]);

    });
  });

  describe('削除', () => {
    test('rssListからURLを削除し、rssListがなくなる', () => {
      localStorage.setItem('rssList', JSON.stringify([
        {
          name: 'name1',
          url: 'url1'
        }
      ]));
      deleteRssList('name1', 'url1');
      expect(localStorage.__STORE__['rssList']).toEqual(undefined);
    });

    test('rssListからURLを削除し、rssListが残る', () => {
      localStorage.setItem('rssList', JSON.stringify([
        {
          name: 'name1',
          url: 'url1'
        }, {
          name: 'name2',
          url: 'url1'
        }
      ]));
      deleteRssList('name1', 'url1');
      expect(JSON.parse(localStorage.getItem('rssList'))).toEqual([
        {
          name: 'name2',
          url: 'url1'
        }
      ]);
    });

  });
});
