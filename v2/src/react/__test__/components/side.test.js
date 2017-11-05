'use strict';
jest.dontMock('../../components/side.jsx');
jest.useFakeTimers();
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Side from '../../components/side.jsx';
import mockdate from 'mockdate';

const onShutDownClick = jest.fn();
const onMimizeClick = jest.fn();
const onOpenGithubClick = jest.fn();
const loadItemList = jest.fn();
var actions = {
  onShutDownClick: onShutDownClick,
  onMimizeClick: onMimizeClick,
  onOpenGithubClick: onOpenGithubClick,
  loadItemList: loadItemList
}

test('snapshot', function() {
  // new Dateをモック化する
  mockdate.set(1434319925275);
  const tree = renderer.create(<Side actions={actions}/>).toJSON();
  expect(tree).toMatchSnapshot();

  mockdate.reset();
});

describe('functions', () => {

  test('現在時刻表記', function() {
    // new Dateをモック化する
    mockdate.set(new Date(2017, 5, 15, 7, 12, 5));
    const side = ReactTestUtils.renderIntoDocument(<Side actions={actions}/>);
    // 1秒待ち、setIntervalを実行する。
    jest.runTimersToTime(1000);
    expect(side.state.MMDD).toBe('6/15');
    expect(side.state.HHmmss).toBe('07:12:05');
    mockdate.reset();

    mockdate.set(new Date(1989, 3, 13, 13, 45, 50));
    const side2 = ReactTestUtils.renderIntoDocument(<Side actions={actions}/>);
    // 1秒待ち、setIntervalを実行する。
    jest.runTimersToTime(1000);
    expect(side2.state.MMDD).toBe('4/13');
    expect(side2.state.HHmmss).toBe('13:45:50');
    mockdate.reset();

  });

  test('shutdownボタンクリック', function() {
    const side = mount(<Side actions={actions}/>);
    side.find('.red.shutdown.icon').simulate('click');
    expect(onShutDownClick).toHaveBeenCalled();
  });

  test('minimizeボタンクリック', function() {
    const side = mount(<Side actions={actions}/>);
    side.find('.green.minus.square.icon').simulate('click');
    expect(onMimizeClick).toHaveBeenCalled();
  });

  test('openGitHubボタンクリック', function() {
    const side = mount(<Side actions={actions}/>);
    side.find('.olive.github.icon').simulate('click');
    expect(onOpenGithubClick).toHaveBeenCalled();
  });

  test('refreshボタンクリック')
});
