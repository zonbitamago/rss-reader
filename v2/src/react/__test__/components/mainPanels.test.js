'user strict';
jest.dontMock('../../components/mainPanels.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import MainPanels from '../../components/mainPanels.jsx';

test('snapshot', function() {
  const tree = renderer.create(
    <MainPanels/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
