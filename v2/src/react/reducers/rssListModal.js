'use strict';
import * as actionTypes from '../utils/actionTypes';
import FeedMe from 'feedme';
import request from 'sync-request';

const initialAppState = {
  rssListModalOpen: false,
  rssList: getRssList()
};

const rssListModal = (state = initialAppState, action) => {
  if (action.type === actionTypes.RSSLISTMODAL) {
    return {
      state,
      rssListModalOpen: !state.rssListModalOpen,
      rssList: state.rssList
    };
  } else if (action.type === actionTypes.RSSINPUT) {
    console.log('rssInputClick!');
    save(action.name, action.url);
    return {state, rssListModalOpen: state.rssListModalOpen, rssList: getRssList()};
  } else {
    return state;
  }

};

export function getRssList() {
  return localStorage.rssList == undefined
    ? [{}]
    : JSON.parse(localStorage.rssList);
};

export var save = (name, url) => {
  if (!checkURL(url)) {
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

var checkURL = (url) => {
  var isAvailable = false;
  try {
    var res = request('GET', url);
    var parser = new FeedMe(true);
    parser.write(res.getBody());
    if (parser.done() != undefined) {
      isAvailable = true;
    }
  } catch (e) {
    console.log(e);
    alert('登録できないURLです。')
  }

  return isAvailable;
};

export default rssListModal;
