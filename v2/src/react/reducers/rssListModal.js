'use strict';
import * as actionTypes from '../utils/actionTypes';
import * as constants from '../utils/constants';
import fs from 'fs';

const initialAppState = {
  rssListModalOpen: false,
  urlList: getUrlList()
};

const rssListModal = (state = initialAppState, action) => {
  if (action.type === actionTypes.RSSLISTMODAL) {
    return {
      state,
      rssListModalOpen: !state.rssListModalOpen
    };
  } else if (action.type === actionTypes.RSSINPUT) {
    console.log('rssInputClick!');
    return {state, rssListModalOpen: state.rssListModalOpen};
  } else {
    return state;
  }
};

const setURLContent = () => {
  var state = this;
  if (this.props.set.size == 0) {
    this.props.set.add(state.state);
  } else {
    var exists = false;
    this.props.set.forEach((val) => {
      if (val.name == state.state.name) {
        exists = true;
        val.url = state.state.url;
      }
    });

    if (!exists) {
      this.props.set.add(state.state);
    }
  }
};

function getUrlList() {
  var urlList = '';
  try {
    urlList = JSON.parse(fs.readFileSync(constants.info_path, 'utf8'));
  } catch (e) {};
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
