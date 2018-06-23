import { observable, computed, action } from "mobx";

// TODO削除予定
class SettingStore {
  // @observable updateDuration = 5;
  // @action.bound
  // getSettings() {
  //   if (localStorage.getItem("settings") == undefined) {
  //     this.updateDuration = 5;
  //   } else {
  //     this.updateDuration = JSON.parse(
  //       localStorage.getItem("settings")
  //     ).updateDuration;
  //   }
  // }
  // @action.bound
  // setSetting() {
  //   localStorage.setItem(
  //     "settings",
  //     JSON.stringify({
  //       updateDuration: this.updateDuration
  //     })
  //   );
  // }
}

export default SettingStore;
