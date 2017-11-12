'use strict';
jest.dontMock('../../utils/utils');
import * as utils from '../../utils/utils';
import mockdate from 'mockdate';

beforeEach(() => {
  // localStorage.rssList = undefined;
  localStorage.clear();
  // console.log(localStorage);
})

describe('rssList取得', () => {

  test('rsslistが0個の場合', () => {
    expect(utils.getRssList()).toEqual(undefined);
  });

  test('rsslistが1個の場合。', () => {
    localStorage.setItem('rssList', JSON.stringify([
      {
        name: 'name1',
        url: 'http://www.feedforall.com/sample-feed.xml'
      }
    ]));
    expect(utils.getRssList()).toEqual([
      {
        name: 'name1',
        url: 'http://www.feedforall.com/sample-feed.xml'
      }
    ]);
  });

});

describe('時刻整形処理', () => {
  test('現在時刻から1時間未満は分表記', () => {
    mockdate.set(new Date(2017, 10, 15, 7, 12, 5));
    var date = new Date(2017, 10, 15, 7, 10, 5);

    var timeInMS = date.getTime();
    expect(utils.transformDate(timeInMS)).toEqual('2 minutes ago');
  });

  test('現在時刻から1時間以上、1日未満は時間表記', () => {
    mockdate.set(new Date(2017, 10, 15, 7, 12, 5));
    var date = new Date(2017, 10, 15, 5, 12, 5);

    var timeInMS = date.getTime();
    expect(utils.transformDate(timeInMS)).toEqual('2 hours ago');
  });

  test('現在時刻から1日以上は年月日表記', () => {
    mockdate.set(new Date(2017, 10, 17, 7, 12, 5));
    var date = new Date(2017, 10, 15, 7, 12, 5);

    var timeInMS = date.getTime();
    expect(utils.transformDate(timeInMS)).toEqual('November 15, 2017');
  });
});

describe('numbercheck',() => {
  test('数値以外入力');
  test('数値を入力');
})
