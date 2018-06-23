import { observable, computed, action } from "mobx";
import feedParseUtil from "../util/feedParseUtil";
import moment from "moment";

class ItemStore {
  @observable items = [];
  @observable updateDate = moment().format("HH:mm:ss");
  @observable loading = false;
  @observable updateDuration = 5;

  @action.bound
  add() {
    this.loading = true;
    var urlList = JSON.parse(localStorage.getItem("rssList"));
    var promiseList = urlList.map(urlNode => {
      var util = new feedParseUtil();
      return util
        .feedParse(urlNode.url)
        .then(item => {
          return item.map(node => {
            node.name = urlNode.name;
            node.created = node.pubdate
              ? Date.parse(node.pubdate)
              : Date.parse(node.updated);

            return node;
          });
        })
        .catch(error => {
          console.warn("error:" + urlNode.name);
          console.warn(error);
          return [];
        });
    });

    return Promise.all(promiseList).then(feedList => {
      this.items = [];
      this.updateDate = moment().format("HH:mm:ss");

      var dataList = [];
      // 配列を一つにまとめる
      feedList.map(feed => {
        Array.prototype.push.apply(dataList, feed);
      });

      dataList
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
        .forEach(data => {
          var url = data.link;
          if (Object.prototype.toString.call(data.link) == "[object Array]") {
            url = data.link[0].href;
          } else if (url.href != undefined) {
            url = url.href;
          }

          var domain = url.split("/")[2];
          var favicon_url =
            "http://www.google.com/s2/favicons?domain=" + domain;
          // var favicon_url = "http://favicon.hatena.ne.jp/?url=http://" + domain;

          this.items.push({
            src: favicon_url,
            alt: data.name,
            domainName: data.name,
            url: url,
            itemName: data.title,
            date: data.created
          });
        });

      this.loading = false;
    });
  }

  @action.bound
  getSettings() {
    if (localStorage.getItem("settings") == undefined) {
      this.updateDuration = 5;
    } else {
      this.updateDuration = JSON.parse(
        localStorage.getItem("settings")
      ).updateDuration;
    }
  }
  @action.bound
  setSetting() {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        updateDuration: this.updateDuration
      })
    );
  }
}

export default ItemStore;
