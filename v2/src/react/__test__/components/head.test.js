'user strict';
jest.dontMock('../../components/head.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import Head from '../../components/head.jsx';

test('snapshot', function() {
  const tree = renderer.create(
    <Head/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
