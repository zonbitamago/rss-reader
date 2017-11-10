'use strict';
jest.dontMock('../../reducers/itemList');
import itemList from '../../reducers/itemList';
import * as actionTypes from '../../utils/actionTypes';
import moment from 'moment';

const initialAppState = {
  itemList: [],
  loading: false,
  updated: ''
};

describe('reducers', () => {
  describe('load', () => {

    test('記事が0個の場合', () => {
      var action = {
        type: actionTypes.ITEMLISTLOAD,
        itemList: []
      };
      var itemListAction = itemList(initialAppState, action);
      expect(itemListAction).toEqual({
        itemList: [],
        loading: false,
        updated: 'updated:' + moment().format('LTS'),
        state: initialAppState
      });
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
        loading: false,
        updated: 'updated:' + moment().format('LTS'),
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
        loading: false,
        updated: 'updated:' + moment().format('LTS'),
        state: initialAppState
      });
    });
  });

  test('loading', () => {
    var action = {
      type: actionTypes.ITEMLISTLOADING
    };
    var itemListAction = itemList(initialAppState, action);
    expect(itemListAction).toEqual({itemList: [], loading: true, updated: initialAppState.updated, state: initialAppState});
  });

  test('else', () => {
    var action = {
      type: 'else'
    };
    var itemListAction = itemList(undefined, action);
    expect(itemListAction).toEqual(initialAppState);
  });

});
