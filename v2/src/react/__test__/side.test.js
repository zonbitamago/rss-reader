'user strict';
jest.dontMock('../components/side.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import Side from '../components/side.jsx';

test('samle', function() {
  expect(1).toBe(1);
});

test('snapshot', function() {
  const tree = renderer.create(
    <Side/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
