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
// export const loadItemList = () => ({type: actionTypes.ITEMLISTLOAD, itemList: [{},{}]});
export const loadItemList = () => {
  console.log('loadItemList!');
  return(dispatch) => {
    var dataList = [];

    var rssList = utils.getRssList();
    if (rssList == undefined) {
      return dispatch(() => ({type: actionTypes.ITEMLISTLOAD, itemList: dataList}));
    };
    var promiseList = rssList.map((item, idx) => {
      return fetch(item.url).then((response) => {
        return response.text();
      }).then((rss) => {
        var parser = new FeedMe(true);
        parser.write(rss);
        // parser.on('item', (rssItems) => {
        //   rssItems.name = items.name;
        //
        //   rssItems.created = rssItems.pubdate
        //     ? Date.parse(rssItems.pubdate)
        //     : Date.parse(rssItems.updated);
        // });

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
  console.log('onRssInputClick!');
  return(dispatch) => {
    dispatch(() => ({type: actionTypes.RSSISLOADING, name: name, url: url}));
    return fetch(url).then((response) => {
      try {
        return response.text()
      } catch (e) {
        console.log(e);
        throw e;
      }
    }, (error) => {
      throw error;
    }).then((xml) => {
      console.log('parse!');
      try {
        var parser = new FeedMe(true);
        parser.write(xml);
        parser.done();
        return dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_SUCCESS}))
      } catch (e) {
        return dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR}))
      }
    }, (reason) => {
      console.log('catch!');
      return dispatch(() => ({type: actionTypes.RSSINPUT, name: name, url: url, status: constants.FEED_STATUS_ERROR}))
    })
  }
};
