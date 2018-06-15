import { observable, action } from "mobx";
import feedParseUtil from "../util/feedParseUtil";

class RssListStore {
  @observable rssList = [];
  @observable name = "";
  @observable url = "";

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
  setRssList() {
    var util = new feedParseUtil();
    var ret = util.feedParse(this.url);
    return ret
      .then(() => {
        var duplicateList = this.rssList.filter(item => {
          if (item.name == this.name) {
            return item;
          }
        });

        // 重複しているものは登録しない
        if (duplicateList.length > 0) {
          return false;
        }

        this.rssList.push({ name: this.name, url: this.url });
        this.setlocalStorage();

        return true;
      })
      .catch(() => {
        // 正しいURLではない場合、return

        return false;
      });
  }

  @action.bound
  deleteRssList(name) {
    this.rssList = this.rssList.filter(item => item.name != name);
    this.setlocalStorage();
  }

  setlocalStorage() {
    localStorage.setItem("rssList", JSON.stringify(this.rssList));
  }
}

export default RssListStore;
