const packager = require("electron-packager");
// 毎回オプションを書き直すのは面倒くさいのでpackage.jsonから引っ張ってくる
const package = require("./package.json");

packager(
  {
    name: package["name"],
    dir: "./", // ソースフォルダのパス
    out: "./dist", // 出力先フォルダのパス
    // icon: "./source/icon.ico",// アイコンのパス
    // platform: "darwin",
    platform: "win32", //windows用
    arch: "x64",
    electronVersion: "1.6.11", // Electronのバージョン
    overwrite: true, // 上書き
    asar: false, // asarパッケージ化
    appVersion: package["version"], // アプリバージョン
    appCopyright: "Copyright (C) 2017 " + package["author"] + "." // コピーライト

    // "version-string": {// Windowsのみのオプション
    //     CompanyName: "totoraj.net",
    //     FileDescription: package["name"],
    //     OriginalFilename: package["name"]+".exe",
    //     ProductName: package["name"],
    //     InternalName: package["name"]
    // }
  },
  function(err, appPaths) {
    // 完了時のコールバック
    if (err) console.log(err);
    console.log("Done: " + appPaths);
  }
);
