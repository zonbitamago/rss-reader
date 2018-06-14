export let store = {
  ItemStore: { items: [], add: () => console.log("add") },
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
    setRssList: () => console.log("setRssList"),
    deleteRssList: () => console.log("deleteRssList")
  }
};
