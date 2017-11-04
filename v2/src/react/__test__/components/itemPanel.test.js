'use strict';
jest.dontMock('../../components/itemPanel.jsx');
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import {ipcRenderer} from 'electron';
import {mount} from 'enzyme';
import ItemPanel from '../../components/itemPanel.jsx';

test('snapshot', () => {
  var item = {
    link: "https://xxx/1",
    name: 'name1',
    title: 'title1'
  };

  const tree = renderer.create(<ItemPanel item={item}/>);
  expect(tree).toMatchSnapshot();
});

test('記事リンククリック', () => {
  var item = {
    link: [
      {
        href: "https://xxx/1"
      }
    ],
    name: 'name1',
    title: 'title1'
  };

  const wrapper = mount(<ItemPanel item={item}/>);
  wrapper.find('a').simulate('click');

  expect(ipcRenderer.send).toHaveBeenCalled();
});

describe('記事投稿日時',() => {
  test('分表記');

  test('時間表記');

  test('年月日表記');
});
