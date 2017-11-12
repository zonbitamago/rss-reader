'use strict';
jest.dontMock('../../components/settingsModal.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import SettingsModal from '../../components/settingsModal.jsx';

const open = false;
const onSettingsModalClick = jest.fn();

const actions = {
  onSettingsModalClick: onSettingsModalClick
}

describe('snapshot', () => {
  test('icon', () => {
    const tree = renderer.create(<SettingsModal actions={actions} open={false}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('modal open', () => {
    const wrapper = mount(<SettingsModal actions={actions} open={true}/>);
    var modal = document.querySelector('.ui.page.modals.dimmer.transition.visible.active').innerHTML;
    expect(modal).toMatchSnapshot();
  });
});
