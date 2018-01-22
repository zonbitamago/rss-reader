'user strict';
jest.dontMock('../../containers/app.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import {App} from '../../containers/app.jsx';
import mockdate from 'mockdate';

const actions = {
  loadItemList: jest.fn(),
  loadingItemList: jest.fn(),
  onSettingsModalClick: jest.fn()
};
const mapstate = {
  rssListModal: {
    rssListModalOpen: false
  },
  settingsModal: {
    settingsModalOpen: false,
    updateDuration: 5
  },
  itemList: []
};
const store = {
  dispatch: jest.fn()
};

test('snapshot', function() {
  mockdate.set(1434319925275);
  const tree = renderer.create(<App actions={actions} mapstate={mapstate} store={store}/>).toJSON();
  expect(tree).toMatchSnapshot();

  mockdate.reset();
});