'use strict';
jest.dontMock('../../components/rssListModal.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import RssListModal from '../../components/rssListModal.jsx';

const open = false;
const onRssListModalClick = jest.fn();
const actions = {
  onRssListModalClick: onRssListModalClick
};

beforeEach(() => {
  document.body.innerHTML = ''
})

test('snapshot', function() {
  const tree = renderer.create(<RssListModal actions={actions} open={false}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('modal open',() => {
   const wrapper = mount(<RssListModal actions={actions} open={true}/>);
   var modal = document.querySelector('.ui.page.modals.dimmer.transition.visible.active').innerHTML
   expect(modal).toMatchSnapshot();
})

test('modal close button',() => {
   const wrapper = mount(<RssListModal actions={actions} open={true}/>);
   var modal = document.querySelector('.ui.page.modals.dimmer.transition.visible.active')
   modal.querySelector('.ui.red.button').click();
   expect(onRssListModalClick).toHaveBeenCalled();
})
