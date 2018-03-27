"use strict";
import * as actionTypes from "../utils/actionTypes";
import * as constants from "../utils/constants";
import * as utils from "../utils/utils";
import axios from "axios";

export const onShutDownClick = () => ({ type: actionTypes.SHUTDOWN });
export const onMimizeClick = () => ({ type: actionTypes.MINIMIZE });
export const onOpenGithubClick = () => ({ type: actionTypes.OPEN_GITHUB });
export const onHomeClick = () => ({ type: actionTypes.HOME });
export const onRssListModalClick = () => ({ type: actionTypes.RSSLISTMODAL });
export const onRssListDeleteClick = (name, url) => ({
  type: actionTypes.RSSLISTDELETE,
  name: name,
  url: url
});
export const onRssListURLClick = url => ({
  type: actionTypes.OPEN_RSSURL,
  url: url
});
export const loadingItemList = () => ({ type: actionTypes.ITEMLISTLOADING });
export const onSettingsModalClick = () => ({ type: actionTypes.SETTINGSMODAL });
export const setSettings = updateDuration => ({
  type: actionTypes.SETSETTINGS,
  updateDuration: updateDuration
});
export const loadItemList = () => {
  return dispatch => {
    // var dataList = [];

    var rssList = utils.getRssList();
    if (rssList == undefined) {
      console.log("rssList undefined!");
      return new Promise((resolve, reject) => {
        resolve();
      }).then(() => {
        return dispatch(() => ({
          type: actionTypes.ITEMLISTLOAD,
          itemList: []
        }));
      });
    }
    var promiseList = rssList.map((item, idx) => {
      return utils
        .feedParse(item.url)
        .then(rss => {
          var json = rss;
          json.map((node, idx) => {
            node.name = item.name;
            node.created = node.pubdate
              ? Date.parse(node.pubdate)
              : Date.parse(node.updated);
          });
          return json;
        })
        .catch(() => {
          return [];
        });
    });

    return Promise.all(promiseList).then(jsonList => {
      var dataList = [];
      // 配列を一つにまとめる
      jsonList.map((rss, idx) => {
        Array.prototype.push.apply(dataList, rss);
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
      return dispatch(() => ({
        type: actionTypes.ITEMLISTLOAD,
        itemList: dataList
      }));
    });
  };
};

export const onRssInputClick = (name, url) => {
  return dispatch => {
    return utils.feedParse(url).then(
      json => {
        try {
          return dispatch(() => ({
            type: actionTypes.RSSINPUT,
            name: name,
            url: url,
            status: constants.FEED_STATUS_SUCCESS
          }));
        } catch (e) {
          return dispatch(() => ({
            type: actionTypes.RSSINPUT,
            name: name,
            url: url,
            status: constants.FEED_STATUS_ERROR
          }));
        }
      },
      reason => {
        return dispatch(() => ({
          type: actionTypes.RSSINPUT,
          name: name,
          url: url,
          status: constants.FEED_STATUS_ERROR
        }));
      }
    );
  };
};
