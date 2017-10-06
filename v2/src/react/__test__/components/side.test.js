'user strict';
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
var actions = {
  onShutDownClick: onShutDownClick,
  onMimizeClick: onMimizeClick,
  onOpenGithubClick: onOpenGithubClick
}

test('snapshot', function() {
  // new Dateをモック化する
  mockdate.set(1434319925275);
  const tree = renderer.create(<Side actions={actions}/>).toJSON();
  expect(tree).toMatchSnapshot();

  mockdate.reset();
});
test('setInterval test', function() {
  // new Dateをモック化する
  mockdate.set(1434319925275);
  const side = ReactTestUtils.renderIntoDocument(<Side actions={actions}/>);
  // 1秒分待ち、setIntervalを実行する。
  jest.runTimersToTime(1000);
  expect(side.state.MMDD).toBe('6/15');
  expect(side.state.HHmmss).toBe('07:12:05');
  mockdate.reset();

});

test('onClick shutdown', function() {
  const side = mount(<Side actions={actions}/>);
  side.find('.red.shutdown.icon').simulate('click');
  expect(onShutDownClick).toHaveBeenCalled();
});

test('onClick minimize', function() {
  const side = mount(<Side actions={actions}/>);
  side.find('.green.minus.square.icon').simulate('click');
  expect(onMimizeClick).toHaveBeenCalled();
});

test('onClick openGitHub', function() {
  const side = mount(<Side actions={actions}/>);
  side.find('.olive.github.icon').simulate('click');
  expect(onOpenGithubClick).toHaveBeenCalled();
});
