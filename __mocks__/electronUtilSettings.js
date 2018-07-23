export const electronUtil = {
  closeApp: () => {
    console.log("closeApp");
  },
  minimizeApp: () => {
    console.log("minimizeApp");
  },
  openBrowser: url => {
    console.log("openBrowser");
    console.log(url);
  }
};
