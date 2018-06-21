import ItemStore from "./ItemStore";
import feedParseUtil from "../util/feedParseUtil";
import * as rssConstants from "../../../__mocks__/rssConstants";

jest.mock("../util/feedParseUtil");

describe("ItemStore", () => {
  let store;

  beforeEach(() => {
    store = new ItemStore();
  });

  it("init", () => {
    expect(store.items.length).toBe(0);
  });

  it("add", () => {
    feedParseUtil.mockImplementation(() => {
      return {
        feedParse: url => {
          return new Promise(resolve => {
            resolve(rssConstants.RSS2_FEED);
          });
        }
      };
    });

    var promise = store.add();
    expect(store.items.length).toBe(1);
    expect(store.items[0].src).toBe("testSrc");
    expect(store.items[0].alt).toBe("testAlt");
    expect(store.items[0].domainName).toBe("testDomainName");
    expect(store.items[0].url).toBe("testUrl");
    expect(store.items[0].itemName).toBe("testItemName");
    expect(store.items[0].date).toBe("testDate");
  });
});
