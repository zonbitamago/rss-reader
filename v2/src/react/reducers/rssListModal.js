'use strict';
import * as actionTypes from '../utils/actionTypes';
import * as constants from '../utils/constants';
import fs from 'fs';
import FeedMe from 'feedme';
import http from 'http';
import https from 'https';
import request from 'sync-request';

const initialAppState = {
  rssListModalOpen: false,
  urlList: getUrlList()
};

const rssListModal = (state = initialAppState, action) => {
  if (action.type === actionTypes.RSSLISTMODAL) {
    return {
      state,
      rssListModalOpen: !state.rssListModalOpen,
      urlList: getUrlList()
    };
  } else if (action.type === actionTypes.RSSINPUT) {
    console.log('rssInputClick!');
    var urlList = getUrlList();
    // urlList = setURLContent(urlList, action.name, action.url);
    save(urlList, action.name, action.url);
    var newUrlList = getUrlList();
    console.log(newUrlList);
    return {state, rssListModalOpen: state.rssListModalOpen, urlList: newUrlList};
  } else {
    return state;
  }

};


// function getUrlList() {
//   var urlList = {};
//   try {
//     urlList = JSON.parse(fs.readFileSync(constants.info_path, 'utf8'));
//   } catch (e) {
//     // console.log(e);
//   };
//   return urlList;
// }

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
  } catch (e) {}

  return isAvailable;
};

export default rssListModal;
