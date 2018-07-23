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
  FeedListStore: {
    feedList: [
      { name: "google", url: "https://www.google.co.jp/" },
      { name: "yahoo", url: "https://www.yahoo.co.jp/" }
    ],
    getFeedList: () => console.log("getFeedList"),
    setFeedList: () => {
      console.log("setFeedList");
      return new Promise(resolve).then(() => {
        return true;
      });
    },
    deleteFeedList: () => console.log("deleteFeedList")
  }
};
