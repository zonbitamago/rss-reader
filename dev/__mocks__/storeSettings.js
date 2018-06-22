import { resolve } from "bluebird-lst";
import moment from "moment";

export let store = {
  ItemStore: {
    items: [],
    loading: false,
    updateDate: moment("2012-06-20 09:12:34").format("HH:mm:ss"),
    add: () => console.log("add")
  },
  SettingStore: {
    updateDuration: 5,
    getSettings: () => console.log("getSettings"),
    setSetting: () => console.log("setSetting")
  },
  RssListStore: {
    rssList: [
      { name: "google", url: "https://www.google.co.jp/" },
      { name: "yahoo", url: "https://www.yahoo.co.jp/" }
    ],
    getRssList: () => console.log("getRssList"),
    setRssList: () => {
      console.log("setRssList");
      return new Promise(resolve).then(() => {
        return true;
      });
    },
    deleteRssList: () => console.log("deleteRssList")
  }
};
