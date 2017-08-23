'use strict';
import React from 'react';
import RssInput from './rssInput.jsx';
import fs from 'fs';
import path from 'path';
import {ipcRenderer} from 'electron';
let info_path;
let set;

class RssList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: ""
    }
    info_path = this.props.info_path;
    this.isExists = this.isExists.bind(this);
  };
  isExists(file) {
    try {
      fs.statSync(file);
      return true
    } catch (err) {
      if (err.code === 'ENOENT')
        return false
    }
  };

  render() {
    let liNodes = "";
    set = new Set();
    let setState = this;

    let clearURLContent = (set, name) => {
      var delState;
      set.forEach((val) => {
        if (val.name == name) {
          delState = val;
        }
      });
      set.delete(delState);
    };

    let delItem = (e) => {
      if (confirm('削除しますか?')) {
        console.log('delItem');
        clearURLContent(set, e.target.value);
        fs.writeFileSync(info_path, JSON.stringify([...set]), (err) => {
          console.log('err');
          console.log(err);
        });
        setState.forceUpdate();
        console.log(set);

        setState.props.load();
      }
    };

    if (this.isExists(info_path)) {
      let urlList = JSON.parse(fs.readFileSync(info_path, 'utf8'));
      console.log(urlList);
      liNodes = urlList.map((items, idx) => {
        set.add(items);
        var openBrowser = () => {
          //メインプロセスへ送信する
          ipcRenderer.send('openBrowser', items.url);
        };
        return (
          <li className='rssList' key={idx}>
            <input type='checkbox' onChange={delItem} value={items.name}/>
            <a href='#' onClick={openBrowser}>{items.name}</a>
          </li>
        )
      });
    }

    return (
      <div>
        <ul>
          {liNodes}
        </ul>
        <RssInput parent={setState} set={set} info_path={info_path} load={this.props.load}/>
      </div>
    );
  }
}

module.exports = RssList
