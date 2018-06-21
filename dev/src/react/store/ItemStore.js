import { observable, computed, action } from "mobx";
import feedParseUtil from "../util/feedParseUtil";

class ItemStore {
  @observable items = [];

  @action.bound
  add() {
    var util = new feedParseUtil();
    var ret = util.feedParse(JSON.parse(localStorage.getItem("rssList")));

    this.items.push({
      src: "testSrc",
      alt: "testAlt",
      domainName: "testDomainName",
      url: "testUrl",
      itemName: "testItemName",
      date: "testDate"
    });
  }
}

export default ItemStore;
