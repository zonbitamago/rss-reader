'use strict';
jest.dontMock('../../components/settingsModal.jsx');
jest.useFakeTimers();
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import SettingsModal from '../../components/settingsModal.jsx';

const open = false;
const onSettingsModalClick = jest.fn();
const loadItemList = jest.fn();
const loadingItemList = jest.fn();
const setSettings = jest.fn();

const actions = {
  onSettingsModalClick: onSettingsModalClick,
  loadItemList: loadItemList,
  loadingItemList: loadingItemList,
  setSettings: setSettings

}
const store = {
  dispatch: jest.fn()
};

beforeEach(() => {
  loadItemList.mockClear();
  loadingItemList.mockClear();
  onSettingsModalClick.mockClear();
  setSettings.mockClear();
  setInterval.mockClear();
  clearInterval.mockClear();
})

afterEach(() => {
  jest.clearAllTimers()
});

describe('snapshot', () => {
  test('icon', () => {
    const tree = renderer.create(<SettingsModal actions={actions} open={false} store={store} updateDuration={5}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('modal open', () => {
    const wrapper = mount(<SettingsModal actions={actions} open={true} store={store} updateDuration={5}/>);
    var modal = document.querySelector('.ui.page.modals.dimmer.transition.visible.active').innerHTML;
    expect(modal).toMatchSnapshot();
  });
});

describe('timer', () => {
  test('timer処理で記事ロード処理呼び出し', () => {
    const wrapper = mount(<SettingsModal actions={actions} open={true} store={store} updateDuration={1}/>);
    expect(loadingItemList.mock.calls.length).toBe(0);
    expect(loadItemList.mock.calls.length).toBe(0);

    jest.runOnlyPendingTimers();
    expect(loadingItemList.mock.calls.length).toBe(1);
    expect(loadItemList.mock.calls.length).toBe(1);

  });
});

describe('setSettings', () => {
  test('YESボタン押下', () => {
    const wrapper = mount(<SettingsModal actions={actions} open={true} store={store} updateDuration={5}/>);
    expect(setInterval).toHaveBeenCalled();
    expect(setInterval.mock.calls.length).toBe(1);

    var button = document.querySelector('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.actions > button.ui.green.button')
    button.click();
    expect(setSettings).toHaveBeenCalled();
    expect(setInterval).toHaveBeenCalled();
    expect(setInterval.mock.calls.length).toBe(2);

  });
});
