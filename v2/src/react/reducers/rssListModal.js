'use strict';
import * as actionTypes from '../utils/actionTypes';
import * as constants from '../utils/constants';
import FeedMe from 'feedme';
import request from 'sync-request';

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
  } else {
    return state;
  }

};

export function getRssList() {
  return localStorage.rssList == undefined
    ? undefined
    : JSON.parse(localStorage.rssList);
};

export var save = (name, url, status) => {
  if (status === constants.FEED_STATUS_ERROR) {
    alert('登録できないURLです。')
    return;
  };
  localStorage.rssList = JSON.stringify(setRssList(name, url));
};

var setRssList = (name, url) => {
  if (localStorage.rssList === undefined || localStorage.rssList.length == 0) {
    var rssList = [
      {
        name: name,
        url: url
      }
    ];
    return rssList;
  } else {
    var rssList = setURLContent(JSON.parse(localStorage.rssList), name, url);
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
  var rssList = JSON.parse(localStorage.rssList);
  rssList = rssList.filter((v) => {
    return v.name != name && v.url != url;
  })
  if (rssList.length > 0) {
    localStorage.rssList = JSON.stringify(rssList);
  } else {
    localStorage.rssList = undefined;
  }
};

export default rssListModal;
