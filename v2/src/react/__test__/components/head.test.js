'user strict';
jest.dontMock('../../components/head.jsx');
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import Head from '../../components/head.jsx';
import moment from 'moment';

const onHomeClick = jest.fn();

const actions = {
  onHomeClick: onHomeClick
};

const updated = moment('2013-02-08 09:30:26').format('LTS');

test('snapshot', function() {
  const tree = renderer.create(<Head actions={actions} updated={updated}/>).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('functions', () => {

  test('homeボタンクリック', () => {
    const head = mount(<Head actions={actions}/>);
    head.find('.home.large.icon').simulate('click');
    expect(onHomeClick).toHaveBeenCalled();
  })
});
