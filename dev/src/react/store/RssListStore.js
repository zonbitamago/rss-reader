import { observable, action } from "mobx";
import feedParseUtil from "../util/feedParseUtil";

class RssListStore {
  @observable rssList = [];

  @action.bound
  getRssList() {
    if (
      localStorage.getItem("rssList") == undefined ||
      localStorage.getItem("rssList").length == 0
    ) {
      this.rssList = [];
    } else {
      this.rssList = JSON.parse(localStorage.getItem("rssList"));
    }
  }

  @action.bound
  setRssList(name, url) {
    var util = new feedParseUtil();
    var ret = util.feedParse(url);
    return ret
      .then(() => {
        var duplicateList = this.rssList.filter(item => {
          if (item.name == name) {
            return item;
          }
        });

        // 重複しているものは登録しない
        if (duplicateList.length > 0) {
          return false;
        }

        this.rssList.push({ name: name, url: url });
        localStorage.setItem("rssList", JSON.stringify(this.rssList));

        return true;
      })
      .catch(() => {
        // 正しいURLではない場合、return

        return false;
      });
  }
}

export default RssListStore;
