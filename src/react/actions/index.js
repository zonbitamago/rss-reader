'use strict';
import * as actionTypes from '../utils/actionTypes';
import * as constants from '../utils/constants';
import * as utils from '../utils/utils';
import fetch from 'isomorphic-fetch'
import FeedMe from 'feedme';

export const onShutDownClick = () => ({type: actionTypes.SHUTDOWN});
export const onMimizeClick = () => ({type: actionTypes.MINIMIZE});
export const onOpenGithubClick = () => ({type: actionTypes.OPEN_GITHUB});
export const onHomeClick = () => ({type: actionTypes.HOME});
export const onRssListModalClick = () => ({type: actionTypes.RSSLISTMODAL});
export const onRssListDeleteClick = (name, url) => ({type: actionTypes.RSSLISTDELETE, name: name, url: url});
export const onRssListURLClick = (url) => ({type: actionTypes.OPEN_RSSURL, url: url});
export const loadingItemList = () => ({type: actionTypes.ITEMLISTLOADING});
export const onSettingsModalClick = () => ({type: actionTypes.SETTINGSMODAL});
export const setSettings = (updateDuration) => ({type: actionTypes.SETSETTINGS, updateDuration: updateDuration});
export const loadItemList = () => {
  return(dispatch) => {
    var dataList = [];

    var rssList = utils.getRssList();
    if (rssList == undefined) {
      console.log('rssList undefined!');
      return new Promise((resolve, reject) => {
        resolve();
      }).then(() => {
        return dispatch(() => ({type: actionTypes.ITEMLISTLOAD, itemList: dataList}));
      });

    };
    var promiseList = rssList.map((item, idx) => {
      return fetch(item.url).then((response) => {
        return response.text();
      }).then((rss) => {
        var parser = new FeedMe(true);
        parser.write(rss);

        var json = parser.done();
        json.items.map((node, idx) => {
          node.name = item.name;
          node.created = node.pubdate
            ? Date.parse(node.pubdate)
            : Date.parse(node.updated);
        });
        return json;
      });
    });

    return Promise.all(promiseList).then((jsonList) => {
      // 配列を一つにまとめる
      jsonList.map((rss, idx) => {
        Array.prototype.push.apply(dataList, rss.items);
      });

      // 新しい順に並べ替える。
      dataList.sort((val1, val2) => {
        var val1 = val1.created;
        var val2 = val2.created;
        if (val1 < val2) {
          return 1;
        } else {
          return -1;
        }
      });
      return dispatch(() => ({type: actionTypes.ITEMLISTLOAD, itemList: dataList}));
    })

  };
};

export const onRssInputClick = (name, url) => {
  return(dispatch) => {
    return fetch(url).then((response) => {
      return response.text()
    }, (error) => {
      throw error;
    }).then((xml) => {
      try {
        var parser = new FeedMe(true);
        parser.write(xml);
        parser.done();
        return dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_SUCCESS}))
      } catch (e) {
        return dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR}))
      }
    }, (reason) => {
      return dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR}))
    })
  }
};
