'use strict';

import React from 'react';
import {ipcRenderer} from 'electron';

class ItemPanel extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    var openBrowser = () => {
      //メインプロセスへ送信する
      ipcRenderer.send('openBrowser', url);
    };

    var items = this.props.items;
    
    var url = items.link;
    if (Object.prototype.toString.call(items.link) == '[object Array]') {
      url = items.link[0].href;
    }
    var domain = url.split('/')[2];
    var favicon_url = "http://www.google.com/s2/favicons?domain=" + domain;
    var date = new Date(items.created).toString();
    date = date.substr(0, date.indexOf('GMT'));
    return (
      <article className='panel' key={this.props.idx}>
        <header className='head'>
          <img className='site_icon' src={favicon_url}/>
          <div className='site_info'>
            {items.name}
          </div>
          <div className='date'>
            {date}
          </div>
        </header>
        <main className='main'>
          <a href="javascript:void(0)" onClick={openBrowser} target="_brank">{items.title}</a>
        </main>
      </article>
    )
  }
}

module.exports = ItemPanel