import ItemStore from "./ItemStore";
import feedParseUtil from "../util/feedParseUtil";
import * as rssConstants from "../../../__mocks__/rssConstants";

jest.mock("../util/feedParseUtil");

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
  });

  it("add", () => {
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
      "rssList",
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

  describe("getSettings", () => {
    it("Not Registed LocalStoreage", () => {
      store.getSettings();
      expect(store.updateDuration).toBe(5);
    });

    it("Registed LocalStoreage", () => {
      localStorage.setItem("settings", JSON.stringify({ updateDuration: 10 }));
      store.getSettings();
      expect(store.updateDuration).toBe(10);
    });
  });

  it("setSettings", () => {
    store.updateDuration = 7;
    store.setSetting();
    expect(JSON.parse(localStorage.getItem("settings")).updateDuration).toBe(7);
  });
});
