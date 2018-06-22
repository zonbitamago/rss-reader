import React from "react";
import ReactDOM from "react-dom";
import Page from "./components/Page/Page";
import * as electronUtil from "./util/electronUtil";
import SettingStore from "./store/SettingStore";
import ItemStore from "./store/ItemStore";
import RssListStore from "./store/RssListStore";

const store = {
  SettingStore: new SettingStore(),
  ItemStore: new ItemStore(),
  RssListStore: new RssListStore()
};

store.ItemStore.add();

const rootDom = document.getElementById("root-dom");
ReactDOM.render(<Page electronUtil={electronUtil} store={store} />, rootDom);
