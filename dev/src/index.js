const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");
const url = require("url");
const fs = require("fs");
const info_path = path.join(app.getPath("userData"), "bounds-info.json");
const loadDevtool = require("electron-load-devtool");
const ROOT_PATH = `file://${__dirname}`;

// window オブジェクトはグローバル参照しなければなりません。
// これがない場合、JavaScriptのオブジェクトがガベージコレクトされた時に、
// ウィンドウが自動的に閉じてしまうでしょう。
let win;

function createWindow() {
  let bounds_info;
  try {
    bounds_info = JSON.parse(fs.readFileSync(info_path, "utf8"));
  } catch (e) {
    bounds_info = {
      width: 800,
      height: 600
    }; // デフォルトバリュー
  }
  bounds_info.frame = false;

  // browser window を生成する
  win = new BrowserWindow(bounds_info);

  // アプリの index.html を読み込む
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // DevToolsを開く
  // win.webContents.openDevTools();

  // ブラウザを開く
  ipcMain.on("openBrowser", (event, arg) => {
    // イベントバインディング
    shell.openExternal(arg);
  });

  // アプリを閉じる
  ipcMain.on("closeApp", (event, arg) => {
    // イベントバインディング
    fs.writeFileSync(info_path, JSON.stringify(win.getBounds()));
    app.quit();
  });

  // アプリを最小化
  ipcMain.on("minimizeApp", (event, arg) => {
    // イベントバインディング
    win.minimize();
  });

  // ウィンドウが閉じられる直前に発火
  win.on("close", e => {
    fs.writeFileSync(info_path, JSON.stringify(win.getBounds()));
  });

  // ウィンドウが閉じられた時に発火
  win.on("closed", () => {
    // ウインドウオブジェクトの参照を外す。
    // 通常、マルチウインドウをサポートするときは、
    // 配列にウインドウを格納する。
    // ここは該当する要素を削除するタイミング。
    win = null;
  });

  win.loadURL(`${ROOT_PATH}/index.html`);
  loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
}

// このイベントは、Electronが初期化処理と
// browser windowの作成を完了した時に呼び出されます。
// 一部のAPIはこのイベントが発生した後にのみ利用できます。
app.on("ready", createWindow);

// 全てのウィンドウが閉じられた時に終了する
app.on("window-all-closed", () => {
  // macOSでは、ユーザが Cmd + Q で明示的に終了するまで、
  // アプリケーションとそのメニューバーは有効なままにするのが一般的。
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // macOSでは、ユーザがドックアイコンをクリックしたとき、
  // そのアプリのウインドウが無かったら再作成するのが一般的。
  if (win === null) {
    createWindow();
  }
});

// このファイル内には、
// 残りのアプリ固有のメインプロセスコードを含めることができます。
// 別々のファイルに分割してここで require することもできます。
