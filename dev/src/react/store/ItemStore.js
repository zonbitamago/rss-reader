import { observable, computed, action } from "mobx";

class ItemStore {
  @observable items = [];

  @action.bound
  add() {
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
