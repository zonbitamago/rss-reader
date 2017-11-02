'use strict';
jest.dontMock('../../components/rssListModal.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import $ from 'jquery';
import {mount} from 'enzyme';
import RssListModal from '../../components/rssListModal.jsx';

const open = false;
const onRssListModalClick = jest.fn();
const onRssListDeleteClick = jest.fn();
const actions = {
  onRssListModalClick: onRssListModalClick,
  onRssListDeleteClick: onRssListDeleteClick
};

beforeEach(() => {
  document.body.innerHTML = ''
})

test('snapshot', function() {
  const tree = renderer.create(<RssListModal actions={actions} open={false}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('modal open', () => {
  const wrapper = mount(<RssListModal actions={actions} open={true}/>);
  var modal = document.querySelector('.ui.page.modals.dimmer.transition.visible.active').innerHTML
  expect(modal).toMatchSnapshot();
})

test('modal close button', () => {
  const wrapper = mount(<RssListModal actions={actions} open={true}/>);
  var modal = document.querySelector('.ui.page.modals.dimmer.transition.visible.active')
  modal.querySelector('.ui.red.button').click();
  expect(onRssListModalClick).toHaveBeenCalled();
})

describe('rssList', () => {
  describe('表示', () => {

    test('rssListが空の場合は何も表示されない', () => {
      var rssList = undefined;
      const wrapper = mount(<RssListModal actions={actions} open={true} rssList={rssList}/>);
      var rssList = document.querySelectorAll('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.scrolling.content > div > ul:nth-child(1) > li');
      expect(rssList.length).toEqual(0);
    });

    test('rssListが1つの場合は1つ表示される', () => {
      var rssList = [
        {
          name: 'name1',
          url: 'url1'
        }
      ];
      const wrapper = mount(<RssListModal actions={actions} open={true} rssList={rssList}/>);
      var rssList = document.querySelectorAll('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.scrolling.content > div > ul:nth-child(1) > li');
      expect(rssList.length).toEqual(1);
    });

    test('rssListが2つの場合は2つ表示される', () => {
      var rssList = [
        {
          name: 'name1',
          url: 'url1'
        }, {
          name: 'name2',
          url: 'url2'
        }
      ];
      const wrapper = mount(<RssListModal actions={actions} open={true} rssList={rssList}/>);
      var rssList = document.querySelectorAll('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.scrolling.content > div > ul:nth-child(1) > li');
      expect(rssList.length).toEqual(2);
    });

  });

  describe('削除', () => {
    test('削除処理が呼び出される。', () => {
      var rssList = [
        {
          name: 'name1',
          url: 'url1'
        }
      ];
      localStorage.setItem('rssList', rssList);
      const wrapper = mount(<RssListModal actions={actions} open={true} rssList={rssList}/>);
      var deleteButton = document.querySelector('body > div.ui.page.modals.dimmer.transition.visible.active > div > div.scrolling.content > div > ul:nth-child(1) > li:nth-child(1) > button');
      deleteButton.click();
      expect(onRssListDeleteClick).toHaveBeenCalled();

    })
  });

})
