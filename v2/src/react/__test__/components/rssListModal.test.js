'use strict';
jest.dontMock('../../components/rssListModal.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import RssListModal from '../../components/rssListModal.jsx';

const open = false;
const actions = {
  onRssListModalClick: jest.fn()
};

test('snapshot', function() {
  const tree = renderer.create(<RssListModal actions={actions} open={open}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
