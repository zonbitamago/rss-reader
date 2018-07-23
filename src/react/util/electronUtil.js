import { ipcRenderer } from "electron";

export function closeApp() {
  ipcRenderer.send("closeApp");
}

export function minimizeApp() {
  ipcRenderer.send("minimizeApp");
}

export function openBrowser(url) {
  ipcRenderer.send("openBrowser", url);
}
