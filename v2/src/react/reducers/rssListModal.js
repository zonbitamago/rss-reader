'use strict';
import * as actionTypes from '../utils/actionTypes';
import * as constants from '../utils/constants';
import fs from 'fs';
import FeedMe from 'feedme';
import http from 'http';
import https from 'https';

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

// const setURLContent = (urlList, name, url) => {
//   if (!urlList.length || urlList.length == 0) {
//     return [
//       {
//         name: name,
//         url: url
//       }
//     ];
//   } else {
//     var exists = false;
//     urlList.forEach((val) => {
//       if (val.name == name) {
//         exists = true;
//         val.url = url;
//       }
//     });
//
//     if (!exists) {
//       urlList.push({name: name, url: url});
//     }
//     return urlList;
//   }
// };

function getUrlList() {
  var urlList = {};
  try {
    urlList = JSON.parse(fs.readFileSync(constants.info_path, 'utf8'));
  } catch (e) {
    // console.log(e);
  };
  return urlList;
}

// const save = (urlList, name, url) => {
//   var state = this;
//   var promise = new Promise((resolve, reject) => {
//     var protocol = (url.startsWith('https:')
//       ? https
//       : http);
//     protocol.get(url, (res) => {
//       var parser = new FeedMe(true);
//       res.pipe(parser);
//       parser.on('end', () => {
//         resolve(parser.done());
//       });
//     });
//   });
//
//   promise.then((rss) => {
//     urlList = setURLContent(urlList, name, url);
//
//     fs.writeFileSync(constants.info_path, JSON.stringify(urlList), function(err) {
//       console.log('err');
//       console.log(err);
//     });
//     // state.props.parent.forceUpdate();
//     console.log('save');
//
//     // state.props.load();
//     return urlList;
//
//   }, (err) => {
//     console.log('err:');
//     console.log(err);
//     alert('登録できないURLです。');
//     return urlList;
//   });
//
// };

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
  var isCheck = true;

  var promise = new Promise((resolve, reject) => {
    var protocol = (url.startsWith('https:')
      ? https
      : http);
    protocol.get(url, (res) => {
      var parser = new FeedMe(true);
      res.pipe(parser);
      parser.on('end', () => {
        resolve(parser.done());
      });
    });
  });

  promise.then((rss) => {
    // setIsCheck(true);
    // console.log(2);
    isCheck = true;
  }, (err) => {
    // console.log('err:');
    // console.log(err);
    console.log(2);
    isCheck = false;
    alert('登録できないURLです。');
    // setIsCheck(false);
  });
  // console.log(promise);
  console.log(1);
  return isCheck;
};

export default rssListModal;
