'user strict';
jest.dontMock('../../components/head.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Head from '../../components/head.jsx';

const onHomeClick = jest.fn();

const actions = {
  onHomeClick: onHomeClick
};

test('snapshot', function() {
  const tree = renderer.create(<Head actions={actions}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('onClick home',() => {
  const head = mount(<Head actions={actions}/>);
  head.find('.home.large.icon').simulate('click');
  expect(onHomeClick).toHaveBeenCalled();
})
