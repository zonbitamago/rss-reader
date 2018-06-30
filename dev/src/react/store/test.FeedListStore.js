import { Promise } from "bluebird-lst";
import * as constants from "../util/constants";
import feedParseUtil from "../util/feedParseUtil";
import twitterUtil from "../util/twitterUtil";
import FeedListStore from "./FeedListStore";

jest.mock("../util/feedParseUtil");
jest.mock("../util/twitterUtil");

describe("FeedListStore", () => {
  let store;

  beforeEach(() => {
    localStorage.clear();
  });

  it("init", () => {
    store = new FeedListStore();
    expect(store.feedList.length).toBe(0);
  });

  describe("getFeedList", () => {
    it("Not Registed", () => {
      store = new FeedListStore();
      store.getFeedList();
      expect(store.feedList.length).toBe(0);
    });

    it("Registed 1items", () => {
      localStorage.setItem(
        constants.FEED_LIST,
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          }
        ])
      );
      store = new FeedListStore();
      store.getFeedList();
      expect(store.feedList.length).toBe(1);
    });

    it("Registed 2items", () => {
      localStorage.setItem(
        constants.FEED_LIST,
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          },
          {
            name: "yahoo.com",
            url: "https://yahoo.com"
          }
        ])
      );
      store = new FeedListStore();
      store.getFeedList();
      expect(store.feedList.length).toBe(2);
    });

    it("rssList_to_feedList", () => {
      localStorage.setItem(
        constants.RSS_LIST,
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          }
        ])
      );
      store = new FeedListStore();
      store.getFeedList();

      expect(localStorage.getItem(constants.FEED_LIST)).not.toBeNull();
      expect(localStorage.getItem(constants.RSS_LIST)).toBeNull();
    });
  });

  describe("setFeedList", () => {
    it("Not Regsited", () => {
      feedParseUtil.mockImplementation(() => {
        return {
          feedParse: url => {
            return new Promise(resolve => {
              resolve("test");
            });
          }
        };
      });

      store = new FeedListStore();
      store.name = "google.com";
      store.url = "https://google.com";

      var promise = store.setFeedList();

      return promise.then(ret => {
        expect(ret).toBe(true);
        expect(
          JSON.parse(localStorage.getItem(constants.FEED_LIST)).length
        ).toBe(1);
        expect(
          JSON.parse(localStorage.getItem(constants.FEED_LIST))
        ).toMatchSnapshot();
      });
    });

    it("Registed", () => {
      feedParseUtil.mockImplementation(() => {
        return {
          feedParse: url => {
            return new Promise(resolve => {
              resolve("test");
            });
          }
        };
      });

      localStorage.setItem(
        constants.FEED_LIST,
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          }
        ])
      );

      store = new FeedListStore();
      store.name = "yahoo.com";
      store.url = "https://yahoo.com";
      store.getFeedList();

      var promise = store.setFeedList();

      return promise.then(ret => {
        expect(ret).toBe(true);
        expect(
          JSON.parse(localStorage.getItem(constants.FEED_LIST)).length
        ).toBe(2);
        expect(
          JSON.parse(localStorage.getItem(constants.FEED_LIST))
        ).toMatchSnapshot();
      });
    });

    it("Duplicate", () => {
      feedParseUtil.mockImplementation(() => {
        return {
          feedParse: url => {
            return new Promise(resolve => {
              resolve("test");
            });
          }
        };
      });

      localStorage.setItem(
        constants.FEED_LIST,
        JSON.stringify([
          {
            name: "google.com",
            url: "https://google.com"
          }
        ])
      );

      store = new FeedListStore();
      store.name = "google.com";
      store.url = "https://google.com";
      store.getFeedList();

      var promise = store.setFeedList();

      return promise.then(ret => {
        expect(ret).toBe(false);
        expect(
          JSON.parse(localStorage.getItem(constants.FEED_LIST)).length
        ).toBe(1);
        expect(
          JSON.parse(localStorage.getItem(constants.FEED_LIST))
        ).toMatchSnapshot();
      });
    });

    it("Not URL", async () => {
      feedParseUtil.mockImplementation(() => {
        return {
          feedParse: url => {
            return new Promise((resolve, reject) => {
              reject(new Error());
            });
          }
        };
      });

      store = new FeedListStore();
      store.name = "google.com";
      store.url = "https://google.com";

      var promise = store.setFeedList();

      return promise.then(ret => {
        expect(ret).toBe(false);
        expect(
          JSON.parse(localStorage.getItem(constants.FEED_LIST))
        ).toMatchSnapshot();
      });
    });

    describe("twitter_list URL", () => {
      it("success", () => {
        twitterUtil.mockImplementation(() => {
          return {
            get: url => {
              return new Promise(resolve => {
                resolve("test");
              });
            }
          };
        });

        store = new FeedListStore();
        store.name = "twitter_test";
        store.url = "https://twitter.com/DZonbitamago/lists/test";

        return store.setFeedList().then(ret => {
          expect(ret).toBe(true);
          expect(
            JSON.parse(localStorage.getItem(constants.FEED_LIST)).length
          ).toBe(1);
          expect(
            JSON.parse(localStorage.getItem(constants.FEED_LIST))
          ).toMatchSnapshot();
        });
      });
    });
  });

  describe("deleteFeedList", () => {
    it("delete　single", () => {
      store = new FeedListStore();

      var feedList = [
        {
          name: "google.com",
          url: "https://google.com"
        },
        {
          name: "yahoo.com",
          url: "https://yahoo.com"
        }
      ];
      localStorage.setItem(constants.FEED_LIST, JSON.stringify(feedList));
      store.feedList = feedList;

      store.deleteFeedList("google.com");

      expect(store.feedList.length).toBe(1);
      expect(JSON.parse(localStorage.getItem(constants.FEED_LIST)).length).toBe(
        1
      );
    });

    it("delete　double", () => {
      store = new FeedListStore();

      var feedList = [
        {
          name: "google.com",
          url: "https://google.com"
        },
        {
          name: "yahoo.com",
          url: "https://yahoo.com"
        }
      ];
      localStorage.setItem(constants.FEED_LIST, JSON.stringify(feedList));
      store.feedList = feedList;

      store.deleteFeedList("google.com");
      store.deleteFeedList("yahoo.com");

      expect(store.feedList.length).toBe(0);
      expect(JSON.parse(localStorage.getItem(constants.FEED_LIST)).length).toBe(
        0
      );
    });
  });
});
