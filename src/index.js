const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ROOT_PATH = `file://${__dirname}`;
const Menu = electron.Menu;

const fs = require("fs");
const path = require("path");
const info_path = path.join(app.getPath("userData"), "bounds-info.json");

let mainWindow;
app.on("ready", e => {
  initMenu();
  let bounds_info;
  try {
    bounds_info = JSON.parse(fs.readFileSync(info_path, 'utf8'));
  } catch (e) {
    bounds_info = {
      width: 510,
      height: 1000
    }; // デフォルトバリュー
  }
  bounds_info.frame = false;

  // レンダリングプロセスから受信する
  electron.ipcMain.on('openBrowser', (event, arg) => { // イベントバインディング
    electron.shell.openExternal(arg);
  })
  electron.ipcMain.on('closeApp', (event, arg) => { // イベントバインディング
    fs.writeFileSync(info_path, JSON.stringify(mainWindow.getBounds()));
    app.quit();
  })

  mainWindow = new BrowserWindow(bounds_info);
  mainWindow.on("close", e => {
    fs.writeFileSync(info_path, JSON.stringify(mainWindow.getBounds()));
  });

  mainWindow.loadURL(`${ROOT_PATH}/index.html`);
});

app.on("window-all-closed", e => {
  app.quit();
});

function initMenu() {
  // Create the Application's main menu
  var template = [
    {
      label: "Application",
      submenu: [
        {
          label: "About Application",
          selector: "orderFrontStandardAboutPanel:"
        }, {
          type: "separator"
        }, {
          label: "Quit",
          accelerator: "Command+Q",
          click: function() {
            app.quit();
          }
        }
      ]
    }, {
      label: "Edit",
      submenu: [
        {
          label: "Undo",
          accelerator: "CmdOrCtrl+Z",
          selector: "undo:"
        }, {
          label: "Redo",
          accelerator: "Shift+CmdOrCtrl+Z",
          selector: "redo:"
        }, {
          type: "separator"
        }, {
          label: "Cut",
          accelerator: "CmdOrCtrl+X",
          selector: "cut:"
        }, {
          label: "Copy",
          accelerator: "CmdOrCtrl+C",
          selector: "copy:"
        }, {
          label: "Paste",
          accelerator: "CmdOrCtrl+V",
          selector: "paste:"
        }, {
          label: "Select All",
          accelerator: "CmdOrCtrl+A",
          selector: "selectAll:"
        }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}
