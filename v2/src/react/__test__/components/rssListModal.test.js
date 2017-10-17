'use strict';
jest.dontMock('../../components/rssListModal.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import $ from 'jquery';
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

// test('input name',() => {
//   const wrapper = mount(<RssListModal actions={actions} open={true}/>);
//   var modal = document.querySelector('.ui.page.modals.dimmer.transition.visible.active');
//   var name = modal.querySelectorAll('.ui.left.labeled.input input')[0];
//   var url = modal.querySelectorAll('.ui.left.labeled.input input')[1];
//
//   name.value='testName';
//
//   $(name).val('testName').change();
//   // name.onchange();
//   // var event = document.createEvent( "HTMLEvents" ); // イベントオブジェクトを作成
//   // event.initEvent("change", false, true); // イベントの内容を設定
//   // name.dispatchEvent(event);
//
//   // document
//   // .getElementsByClassName('.ui.page.modals.dimmer.transition.visible.active')
//   // .getElementsByClassName('.ui.left.labeled.input')
//   // .getElementsByTagName('input')[0].onchange();
//
//   expect(name.value).toEqual('testName');
//
// });
