import SettingStore from "./SettingStore";

describe.skip("SettingStore", () => {
  let store;

  beforeEach(() => {
    store = new SettingStore();
    localStorage.clear();
  });

  it("init", () => {
    expect(store.updateDuration).toBe(5);
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
