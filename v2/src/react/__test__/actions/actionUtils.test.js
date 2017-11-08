'use strict';
jest.dontMock('../../actions/actionUtils');
import * as actionUtils from '../../actions/actionUtils';

const loadItemList = jest.fn();
const loadingItemList = jest.fn();
const store = {
  dispatch: jest.fn()
};

test('ローディング処理&ロード処理呼び出し確認', () => {
  actionUtils.loadItem(store, loadingItemList, loadItemList);
  expect(loadingItemList).toHaveBeenCalled();
  expect(loadItemList).toHaveBeenCalled();
});
