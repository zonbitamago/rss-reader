'use strict';
jest.dontMock('../../reducers/rssListModal');
import rssListModal from '../../reducers/rssListModal';
import * as actionTypes from '../../utils/actionTypes';

const initialAppState = {
  rssListModalOpen: false
};

test('rssListModal', () => {
  var action = {
    type: actionTypes.RSSLISTMODAL
  };
  var rssListModalAction = rssListModal(initialAppState, action);
  expect(rssListModalAction).toEqual({rssListModalOpen: true, state: initialAppState});
})

test('rssInput', () => {
  var action = {
    type: actionTypes.RSSINPUT
  };
  var rssListModalAction = rssListModal(initialAppState, action);
  expect(rssListModalAction).toEqual({rssListModalOpen: false, state: initialAppState});
})

test('else', () => {
  var action = {
    type: 'else'
  };
  var elseaction = rssListModal(initialAppState, action);
  expect(elseaction).toEqual(initialAppState);
});
