'use strict';
jest.dontMock('../../reducers/itemList');
import itemList from '../../reducers/itemList';
import * as actionTypes from '../../utils/actionTypes';

const initialAppState = {
  itemList: [{}]
};

describe('reducers', () => {
  describe('load', () => {

    test('記事が0個の場合', () => {
      var action = {
        type: actionTypes.ITEMLISTLOAD,
        itemList: []
      };
      var itemListAction = itemList(initialAppState, action);
      expect(itemListAction).toEqual({itemList: [], state: initialAppState});
    });

    test('記事が1個の場合', () => {
      var action = {
        type: actionTypes.ITEMLISTLOAD,
        itemList: [
          {
            title: 'title1'
          }
        ]
      };
      var itemListAction = itemList(initialAppState, action);
      expect(itemListAction).toEqual({
        itemList: [
          {
            title: 'title1'
          }
        ],
        state: initialAppState
      });
    });

    test('記事が2個の場合', () => {
      var action = {
        type: actionTypes.ITEMLISTLOAD,
        itemList: [
          {
            title: 'title1'
          }, {
            title: 'title2'
          }
        ]
      };
      var itemListAction = itemList(initialAppState, action);
      expect(itemListAction).toEqual({
        itemList: [
          {
            title: 'title1'
          }, {
            title: 'title2'
          }
        ],
        state: initialAppState
      });
    });
  });

  test('else', () => {
    var action = {
      type: 'else'
    };
    var itemListAction = itemList(initialAppState, action);
    expect(itemListAction).toEqual(initialAppState);
  });

});
