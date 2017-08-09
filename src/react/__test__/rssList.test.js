'use strict'

jest.unmock('../rssList.jsx')

const React = require('react');
const ReactDom = require('react-dom');
const TestUtils = require('react-dom/test-utils');
const RssList = require('../rssList.jsx');

test('rssList', function() {
  function setup() {
    const instance = TestUtils.renderIntoDocument(
      <RssList />
    );
    const rssListNode = ReactDOM.findDOMNode(instance);
    return {instance, rssListNode};

  }

  test('sample',function(){
    expect(true).to.eq(true);
  })
});
