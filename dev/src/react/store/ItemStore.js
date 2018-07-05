import { action, observable } from "mobx";
import moment from "moment";
import feedParseUtil from "../util/feedParseUtil";
import twitterUtil, { getHost } from "../util/twitterUtil";
import * as constants from "../util/constants";

class ItemStore {
  @observable items = [];
  @observable updateDate = moment().format("HH:mm:ss");
  @observable loading = false;
  @observable
  updateDuration =
    localStorage.getItem(constants.SETTINGS) == undefined
      ? 5
      : JSON.parse(localStorage.getItem(constants.SETTINGS)).updateDuration;
  timerId = "";

  @action.bound
  add() {
    this.loading = true;
    var urlList = JSON.parse(localStorage.getItem(constants.FEED_LIST));
    if (urlList == undefined) {
      return;
    }
    var promiseList = urlList.map(urlNode => {
      if (getHost(urlNode.url) == constants.TWITTER_DOMAIN) {
        var util = new twitterUtil();
        return util.get(urlNode.url).then(item => {
          return item.map(node => {
            node.name = node.user.name;
            node.src = node.user.profile_image_url_https;
            node.url = "";
            node.title = node.text;
            var date = new Date(node.created_at);
            node.created = date.getTime();
            return node;
          });
        });
      } else {
        var util = new feedParseUtil();
        return util
          .feedParse(urlNode.url)
          .then(item => {
            return item.map(node => {
              node.name = urlNode.name;
              node.created = node.pubdate
                ? Date.parse(node.pubdate)
                : Date.parse(node.updated);

              var url = node.link;
              if (
                Object.prototype.toString.call(node.link) == "[object Array]"
              ) {
                url = node.link[0].href;
              } else if (url.href != undefined) {
                url = url.href;
              }
              node.url = url;

              var domain = url.split("/")[2];
              var favicon_url =
                "http://www.google.com/s2/favicons?domain=" + domain;
              // var favicon_url = "http://favicon.hatena.ne.jp/?url=http://" + domain;
              node.src = favicon_url;

              return node;
            });
          })
          .catch(error => {
            console.warn("error:" + urlNode.name);
            console.warn(error);
            return [];
          });
      }
    });

    return Promise.all(promiseList).then(feedList => {
      this.items = [];
      this.updateDate = moment().format("HH:mm:ss");

      var dataList = [];
      // 配列を一つにまとめる
      feedList.map(feed => {
        Array.prototype.push.apply(dataList, feed);
      });

      this.items = dataList
        .sort((val1, val2) => {
          // 降順でならべかえ
          var val1 = val1.created;
          var val2 = val2.created;
          if (val1 < val2) {
            return 1;
          } else {
            return -1;
          }
        })
        .map(data => {
          return {
            src: data.src,
            alt: data.name,
            domainName: data.name,
            url: data.url,
            itemName: data.title,
            date: data.created
          };
        });

      this.loading = false;
    });
  }

  @action.bound
  getSettings() {
    if (localStorage.getItem(constants.SETTINGS) == undefined) {
      this.updateDuration = 5;
    } else {
      this.updateDuration = JSON.parse(
        localStorage.getItem(constants.SETTINGS)
      ).updateDuration;
    }
  }
  @action.bound
  setSetting() {
    localStorage.setItem(
      constants.SETTINGS,
      JSON.stringify({
        updateDuration: this.updateDuration
      })
    );
  }

  @action.bound
  setTimer() {
    if (this.timerId != "") {
      clearInterval(this.timerId);
    }

    // 初回呼び出し
    this.add();
    this.timerId = setInterval(this.add, this.updateDuration * 60 * 1000);
  }
}

export default ItemStore;
