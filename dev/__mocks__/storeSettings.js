import { resolve } from "bluebird-lst";
import moment from "moment";

export let store = {
  ItemStore: {
    items: [],
    loading: false,
    updateDate: moment("2012-06-20 09:12:34").format("HH:mm:ss"),
    updateDuration: 5,
    timerId: "dummy",
    add: () => console.log("add"),
    getSettings: () => console.log("getSettings"),
    setSetting: () => console.log("setSetting"),
    setTimer: () => console.log("setTimer")
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
