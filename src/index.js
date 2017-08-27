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
  electron.ipcMain.on('minimizeApp', (event, arg) => { // イベントバインディング
    mainWindow.minimize();
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
      label: 'Edit',
      submenu: [
        {
          label: 'Undo',
          accelerator: 'CmdOrCtrl+Z',
          role: 'undo'
        },
        {
          label: 'Redo',
          accelerator: 'Shift+CmdOrCtrl+Z',
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          label: 'Cut',
          accelerator: 'CmdOrCtrl+X',
          role: 'cut'
        },
        {
          label: 'Copy',
          accelerator: 'CmdOrCtrl+C',
          role: 'copy'
        },
        {
          label: 'Paste',
          accelerator: 'CmdOrCtrl+V',
          role: 'paste'
        },
        {
          label: 'Select All',
          accelerator: 'CmdOrCtrl+A',
          role: 'selectall'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Reload',
          accelerator: 'CmdOrCtrl+R',
          click: function (item, focusedWindow) {
            if (focusedWindow) focusedWindow.reload()
          }
        },
        {
          label: 'Toggle Full Screen',
          accelerator: (function () {
            if (process.platform === 'darwin') {
              return 'Ctrl+Command+F'
            } else {
              return 'F11'
            }
          })(),
          click: function (item, focusedWindow) {
            if (focusedWindow) {
              focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
            }
          }
        },
        {
          label: 'Toggle Developer Tools',
          accelerator: (function () {
            if (process.platform === 'darwin') {
              return 'Alt+Command+I'
            } else {
              return 'Ctrl+Shift+I'
            }
          })(),
          click: function (item, focusedWindow) {
            if (focusedWindow) focusedWindow.toggleDevTools()
          }
        }
      ]
    },
    {
      label: 'Window',
      role: 'window',
      submenu: [
        {
          label: 'Minimize',
          accelerator: 'CmdOrCtrl+M',
          role: 'minimize'
        },
        {
          label: 'Close',
          accelerator: 'CmdOrCtrl+W',
          role: 'close'
        }
      ]
    },
    {
      label: 'Help',
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: function () { require('electron').shell.openExternal('https://electron.atom.io') }
        }
      ]
    }
  ]

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}
