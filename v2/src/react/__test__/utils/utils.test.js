'use strict';
jest.dontMock('../../utils/utils');
import * as utils from '../../utils/utils';

beforeEach(() => {
  // localStorage.rssList = undefined;
  localStorage.clear();
  // console.log(localStorage);
})

describe('取得', () => {

  test('rsslistを取得する。', () => {
    expect(utils.getRssList()).toEqual(undefined);

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
