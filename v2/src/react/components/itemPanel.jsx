'use strict';
import React from 'react';
import {Feed, Divider} from 'semantic-ui-react'
import {ipcRenderer} from 'electron';
import {transformDate} from '../utils/utils';
import styles from '../styles/itemPanel.css';

class ItemPanel extends React.Component {
  render() {
    var item = this.props.item;
    var url = item.link;
    if (Object.prototype.toString.call(item.link) == '[object Array]') {
      url = item.link[0].href;
    }
    var domain = url.split('/')[2];
    var favicon_url = "http://www.google.com/s2/favicons?domain=" + domain;
    // var favicon_url = "http://favicon.hatena.ne.jp/?url=http://" + domain;

    var openBrowser = () => {
      //メインプロセスへ送信する
      ipcRenderer.send('openBrowser', url);
    };

    var date = transformDate(item.created);

    return (<Feed>
      <Feed.Event>
        <Feed.Label className={styles.icon}>
          <img src={favicon_url}/>
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            {item.name}
            <Feed.Date>{date}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra>
            <a href='javascript:void(0);' onClick={openBrowser}>{item.title}</a>
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>
      <Divider/>
    </Feed>)
  }
}

module.exports = ItemPanel
