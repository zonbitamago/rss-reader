'user strict';
jest.dontMock('../components/app.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/app.jsx';

test('samle', function() {
  expect(1).toBe(1);
});

test('snapshot', function() {
  const tree = renderer.create(
    <App/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
