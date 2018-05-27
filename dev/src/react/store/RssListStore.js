import { observable, computed, action } from "mobx";

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
  setRssList(name, url) {}
}

export default RssListStore;
