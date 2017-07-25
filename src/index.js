const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ROOT_PATH = `file://${__dirname}`;

const fs = require("fs");
const path = require("path");
const info_path = path.join(app.getPath("userData"), "bounds-info.json");

let mainWindow;
app.on("ready", e => {
  let bounds_info;
  try {
    bounds_info = JSON.parse(fs.readFileSync(info_path, 'utf8'));
  } catch (e) {
    bounds_info = {
      width: 800,
      height: 1000
    }; // デフォルトバリュー
  }

  // レンダリングプロセスから受信する
  electron.ipcMain.on('openBrowser', (event, arg) => { // イベントバインディング
    electron.shell.openExternal(arg);
  })
  mainWindow = new BrowserWindow(bounds_info);
  mainWindow.loadURL(`${ROOT_PATH}/index.html`);
});

app.on("window-all-closed", e => {
  fs.writeFileSync(info_path, JSON.stringify(mainWindow.getBounds()));
  app.quit();
});
