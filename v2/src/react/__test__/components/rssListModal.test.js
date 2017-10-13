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

test('snapshot', function() {
  const tree = renderer.create(<RssListModal actions={actions} open={open}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('dummy',() => {
   const dummy = mount(<RssListModal actions={actions} open={true}/>);
   dummy.simulate('click');
   expect(onRssListModalClick).toHaveBeenCalled();
})
