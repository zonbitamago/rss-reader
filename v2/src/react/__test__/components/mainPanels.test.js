'use strict';
jest.dontMock('../../components/mainPanels.jsx');
jest.useFakeTimers();
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import MainPanels from '../../components/mainPanels.jsx';
import mockdate from 'mockdate';

mockdate.set(new Date(2017, 10, 15, 7, 12, 5));

const onHomeClick = jest.fn();
const loadItemList = jest.fn();
const loadingItemList = jest.fn();
const actions = {
  onHomeClick: onHomeClick,
  loadItemList: loadItemList,
  loadingItemList: loadingItemList
};
const store = {
  dispatch: jest.fn()
};

const updateInterval = 1000;

beforeEach(() => {
  onHomeClick.mockClear();
  loadItemList.mockClear();
  loadingItemList.mockClear();
})

afterEach(() => {
  jest.clearAllTimers()
});

describe('snapshot', () => {
  var itemList = [];
  test('記事が0個', () => {
    const tree = renderer.create(<MainPanels actions={actions} store={store} itemList={itemList} updateInterval={updateInterval}/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(loadingItemList).toHaveBeenCalled();
    expect(loadItemList).toHaveBeenCalled();
  });

  test('記事が1個', () => {
    var itemList = [
      {
        link: "https://xxx/1",
        name: 'name1',
        title: 'title1'
      }
    ];
    const tree = renderer.create(<MainPanels actions={actions} store={store} itemList={itemList} updateInterval={updateInterval}/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(loadingItemList).toHaveBeenCalled();
    expect(loadItemList).toHaveBeenCalled();
  });

  test('記事が2個', () => {
    var itemList = [
      {
        link: "https://xxx/1",
        name: 'name1',
        title: 'title1'
      }, {
        link: "https://xxx/2",
        name: 'name2',
        title: 'title2'
      }
    ];

    const tree = renderer.create(<MainPanels actions={actions} store={store} itemList={itemList} updateInterval={updateInterval}/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(loadingItemList).toHaveBeenCalled();
    expect(loadItemList).toHaveBeenCalled();
  });

});

describe('timer', () => {
  test('timer処理で記事ロード処理呼び出し', () => {
    var itemList = [];
    const wrapper = mount(<MainPanels actions={actions} store={store} itemList={itemList} updateInterval={updateInterval}/>);
    expect(loadingItemList).toHaveBeenCalled();
    expect(loadItemList).toHaveBeenCalled();
    expect(loadingItemList.mock.calls.length).toBe(1);
    expect(loadItemList.mock.calls.length).toBe(1);

    jest.runOnlyPendingTimers();
    expect(loadingItemList.mock.calls.length).toBe(2);
    expect(loadItemList.mock.calls.length).toBe(2);

  });
});
