'user strict';
jest.dontMock('../../components/mainPanels.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import MainPanels from '../../components/mainPanels.jsx';

const onHomeClick = jest.fn();
const actions = {
  onHomeClick: onHomeClick
};

test('snapshot', function() {
  const tree = renderer.create(<MainPanels actions={actions}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
