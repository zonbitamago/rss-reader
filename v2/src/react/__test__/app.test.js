'user strict';
jest.dontMock('../components/app.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/app.jsx';
import mockdate from 'mockdate';

test('sample', function() {
  expect(1).toBe(1);
});

test('snapshot', function() {
  mockdate.set(1434319925275);
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();

  mockdate.reset();
});
