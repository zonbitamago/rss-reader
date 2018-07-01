import * as rssConstants from "../../../__mocks__/rssConstants";
import * as tweetConstants from "../../../__mocks__/tweetConstants";
import * as constants from "../util/constants";
import feedParseUtil from "../util/feedParseUtil";
import twitterUtil, { getHost } from "../util/twitterUtil";
import ItemStore from "./ItemStore";

jest.mock("../util/feedParseUtil");
jest.mock("../util/twitterUtil");

describe("ItemStore", () => {
  let store;

  beforeEach(() => {
    localStorage.clear();
    store = new ItemStore();
  });

  it("init", () => {
    expect(store.items.length).toBe(0);
    expect(store.updateDuration).toBe(5);
    expect(store.loading).toBe(false);
    expect(store.timerId).toBe("");
  });

  describe("add", () => {
    it("RSS", () => {
      feedParseUtil.mockImplementation(() => {
        return {
          feedParse: url => {
            return new Promise(resolve => {
              resolve(rssConstants.RSS_FEED);
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

      var promise = store.add();
      return promise.then(() => {
        expect(store.items.length).toBe(4);
        expect(store.items[0].src).toBe(
          "http://www.google.com/s2/favicons?domain=liftoff.msfc.nasa.gov"
        );
        expect(store.items[0].alt).toBe("google.com");
        expect(store.items[0].domainName).toBe("google.com");
        expect(store.items[0].url).toBe(
          "http://liftoff.msfc.nasa.gov/news/2003/news-starcity.asp"
        );
        expect(store.items[0].itemName).toBe("Star City");
        expect(store.items[0].date).toBe(1054633161000);
      });
    });

    it("twitter", () => {
      twitterUtil.mockImplementation(() => {
        return {
          get: url => {
            return new Promise(resolve => {
              resolve(tweetConstants.TWEET_LIST);
            });
          }
        };
      });

      getHost.mockImplementation(() => {
        return constants.TWITTER_DOMAIN;
      });

      localStorage.setItem(
        constants.FEED_LIST,
        JSON.stringify([
          {
            name: "twitter_list_test",
            url: "https://twitter.com/DZonbitamago/lists/test"
          }
        ])
      );

      var promise = store.add();
      return promise.then(() => {
        expect(store.items.length).toBe(2);
        expect(store.items[0].src).toBe(
          "https://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png"
        );
        expect(store.items[0].alt).toBe("Twitter API");
        expect(store.items[0].domainName).toBe("Twitter API");
        expect(store.items[0].url).toBe(
          "https://twitter.com/zonbitamago/status/850007368138018800"
        );
        expect(store.items[0].itemName).toBe(
          "RT @TwitterDev: 1/ Today we’re sharing our vision for the future of the Twitter API platform!nhttps://t.co/XweGngmxlP"
        );
        expect(store.items[0].date).toBe(1491492523000);
      });
    });
  });

  describe("getSettings", () => {
    it("Not Registed LocalStoreage", () => {
      store.getSettings();
      expect(store.updateDuration).toBe(5);
    });

    it("Registed LocalStoreage", () => {
      localStorage.setItem(
        constants.SETTINGS,
        JSON.stringify({
          updateDuration: 10
        })
      );
      store.getSettings();
      expect(store.updateDuration).toBe(10);
    });
  });

  it("setSettings", () => {
    store.updateDuration = 7;
    store.setSetting();
    expect(
      JSON.parse(localStorage.getItem(constants.SETTINGS)).updateDuration
    ).toBe(7);
  });

  describe("setTimer", () => {
    it("initialTimer", () => {
      store.setTimer();
      expect(store.timerId).not.toBe("");
    });

    it("initialTimer timerID reset", () => {
      store.timerId = "dummy";
      store.setTimer();
      expect(store.timerId).not.toBe("dummy");
    });
  });
});
