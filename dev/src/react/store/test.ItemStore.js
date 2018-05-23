import ItemStore from "./ItemStore";

describe("ItemStore", () => {
  let store;

  beforeEach(() => {
    store = new ItemStore();
  });

  it("init", () => {
    expect(store.items.length).toBe(0);
  });

  it("add", () => {
    store.add();
    expect(store.items.length).toBe(1);
    expect(store.items[0].src).toBe("testSrc");
    expect(store.items[0].alt).toBe("testAlt");
    expect(store.items[0].domainName).toBe("testDomainName");
    expect(store.items[0].url).toBe("testUrl");
    expect(store.items[0].itemName).toBe("testItemName");
    expect(store.items[0].date).toBe("testDate");
  });
});
