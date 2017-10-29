'user strict';
jest.dontMock('../../containers/app.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../../containers/app.jsx';
import mockdate from 'mockdate';

const actions = {};
const mapstate = {
  rssListModal: {
    rssListModalOpen: false
  }
};

test('snapshot', function() {
  mockdate.set(1434319925275);
  const tree = renderer.create(<App actions={actions} mapstate={mapstate}/>).toJSON();
  expect(tree).toMatchSnapshot();

  mockdate.reset();
});
