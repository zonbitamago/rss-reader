'user strict';
jest.dontMock('../../components/mainPanels.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import MainPanels from '../../components/mainPanels.jsx';

const onHomeClick = jest.fn();
const loadItemList = jest.fn();
const actions = {
  onHomeClick: onHomeClick,
  loadItemList: loadItemList
};
const store = {
  dispatch: jest.fn()
};

describe('snapshot', () => {
  var itemList = [];
  test('記事が0個', () => {
    const tree = renderer.create(<MainPanels actions={actions} store={store} itemList={itemList}/>).toJSON();
    expect(tree).toMatchSnapshot();
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
    const tree = renderer.create(<MainPanels actions={actions} store={store} itemList={itemList}/>).toJSON();
    expect(tree).toMatchSnapshot();
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

    const tree = renderer.create(<MainPanels actions={actions} store={store} itemList={itemList}/>).toJSON();
    expect(tree).toMatchSnapshot();
    expect(loadItemList).toHaveBeenCalled();
  });

});
