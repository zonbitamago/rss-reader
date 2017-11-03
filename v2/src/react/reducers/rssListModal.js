'use strict';
import * as actionTypes from '../utils/actionTypes';
import * as constants from '../utils/constants';
import FeedMe from 'feedme';
import request from 'sync-request';
import {ipcRenderer} from 'electron';

const initialAppState = {
  rssListModalOpen: false,
  rssList: getRssList(),
  isLoading: false
};

const rssListModal = (state = initialAppState, action) => {
  if (action.type === actionTypes.RSSLISTMODAL) {
    return {
      state,
      rssListModalOpen: !state.rssListModalOpen,
      rssList: state.rssList,
      isLoading: state.isLoading
    };
  } else if (action.type === actionTypes.RSSINPUT) {
    save(action.name, action.url, action.status);
    return {state, rssListModalOpen: state.rssListModalOpen, rssList: getRssList(), isLoading: false};
  } else if (action.type === actionTypes.RSSISLOADING) {
    return {state, rssListModalOpen: state.rssListModalOpen, rssList: getRssList(), isLoading: true};
  } else if (action.type === actionTypes.RSSLISTDELETE) {
    deleteRssList(action.name, action.url);
    return {state, rssListModalOpen: state.rssListModalOpen, rssList: getRssList(), isLoading: false};
  } else if (action.type === actionTypes.OPEN_RSSURL) {
    ipcRenderer.send('openBrowser', action.url);
    return {state, rssListModalOpen: state.rssListModalOpen, rssList: getRssList(), isLoading: state.isLoading};
  } else {
    return state;
  }

};

export function getRssList() {
  return localStorage.getItem('rssList') == null
    ? undefined
    : JSON.parse(localStorage.getItem('rssList'));
};

export var save = (name, url, status) => {
  if (status === constants.FEED_STATUS_ERROR) {
    alert('登録できないURLです。')
    return;
  };
  localStorage.setItem('rssList', JSON.stringify(setRssList(name, url)));
};

var setRssList = (name, url) => {
  if (localStorage.getItem('rssList') == undefined || localStorage.getItem('rssList').length == 0) {
    var rssList = [
      {
        name: name,
        url: url
      }
    ];
    return rssList;
  } else {
    var rssList = setURLContent(JSON.parse(localStorage.getItem('rssList')), name, url);
    return rssList;
  }

};

var setURLContent = (rssList, name, url) => {
  var exists = false;
  rssList.forEach((val) => {
    if (val.name == name) {
      exists = true;
      val.url = url;
    }
  });

  if (!exists) {
    rssList.push({name: name, url: url});
  }
  return rssList;
};

export var deleteRssList = (name, url) => {
  var rssList = JSON.parse(localStorage.getItem('rssList'));
  rssList = rssList.filter((v) => {
    return !(v.name == name && v.url == url);
  })
  if (rssList.length > 0) {
    localStorage.setItem('rssList', JSON.stringify(rssList));
  } else {
    localStorage.removeItem('rssList');
  }
};

export default rssListModal;
