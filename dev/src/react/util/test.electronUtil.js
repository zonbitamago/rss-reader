import * as electronUtil from "./electronUtil";
import {
    ipcRenderer
} from "electron";

describe("electronUtil", () => {
    it("closeApp", () => {
        electronUtil.closeApp();
        expect(ipcRenderer.send).toHaveBeenCalled();
    });

    it('mimimizeApp', () => {
        electronUtil.minimizeApp();
        expect(ipcRenderer.send).toHaveBeenCalled();
    })

    it('openBrowser', () => {
        electronUtil.openBrowser();
        expect(ipcRenderer.send).toHaveBeenCalled();
    })

});