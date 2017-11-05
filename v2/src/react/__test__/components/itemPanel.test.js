'use strict';
jest.dontMock('../../components/itemPanel.jsx');
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import {ipcRenderer} from 'electron';
import {mount} from 'enzyme';
import mockdate from 'mockdate';
import ItemPanel from '../../components/itemPanel.jsx';

test('snapshot', () => {
  mockdate.set(new Date(2017, 10, 15, 7, 12, 5));
  var item = {
    link: "https://xxx/1",
    name: 'name1',
    title: 'title1',
    created: new Date(2017, 10, 15, 7, 10, 5).getTime()
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
