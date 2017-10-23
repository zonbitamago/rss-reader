'use strict';
import * as actionTypes from '../utils/actionTypes';
import * as constants from '../utils/constants';
import fs from 'fs';

const initialAppState = {
  rssListModalOpen: false,
  urlList: {}
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
    return {state, rssListModalOpen: state.rssListModalOpen, urlList: urlList};
  } else {
    return state;
  }
};

const setURLContent = (urlList, name, url) => {
  if (urlLisl == 0) {
    return urlList;
  } else {
    var exists = false;
    urlList.forEach((val) => {
      if (val.name == name) {
        exists = true;
        val.url = url;
      }
    });

    if (!exists) {
      urlList.add({name: name, url: url});
    }
    return urlList;
  }
};

function getUrlList() {
  var urlList = {};
  try {
    urlList = JSON.parse(fs.readFileSync(constants.info_path, 'utf8'));
  } catch (e) {
    console.log(e);
  };
  return urlList;
}

const save = () => {
  var state = this;
  var url = state.state.url;
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
    state.setURLContent();

    console.log('set:', state.props.set);
    fs.writeFileSync(constants.info_path, JSON.stringify([...state.props.set]), function(err) {
      console.log('err');
      console.log(err);
    });
    state.props.parent.forceUpdate();
    console.log('save');

    state.props.load();

  }, (err) => {
    console.log('err:');
    console.log(err);
    alert('登録できないURLです。');
  });

};
export default rssListModal;
