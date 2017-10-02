'user strict';
jest.dontMock('../components/side.jsx');
jest.useFakeTimers();
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Side from '../components/side.jsx';
import mockdate from 'mockdate';

test('snapshot', function() {
  // new Dateをモック化する
  mockdate.set(1434319925275);
  const tree = renderer.create(<Side/>).toJSON();
  expect(tree).toMatchSnapshot();

  mockdate.reset();
});
test('setInterval test', function() {
  // new Dateをモック化する
  mockdate.set(1434319925275);
  const side = ReactTestUtils.renderIntoDocument(<Side/>);
  // 1秒分待ち、setIntervalを実行する。
  jest.runTimersToTime(1000);
  expect(side.state.MMDD).toBe('6/15');
  expect(side.state.HHmmss).toBe('07:12:05');
  mockdate.reset();

});
