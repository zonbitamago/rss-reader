export let store = {
  ItemStore: { items: [], add: () => console.log("add") },
  SettingStore: {
    updateDuration: 5,
    getSettings: () => console.log("getSettings"),
    setSetting: () => console.log("setSetting")
  }
};
