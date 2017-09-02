'use strict';

import './style/index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import FeedMe from 'feedme';
import http from 'http';
import https from 'https';
import HomeIcon from 'react-icons/lib/ti/home-outline';
import ItemNodes from './itemNodes.jsx';
import Side from './side.jsx';
import moment from 'moment';
import $ from 'jquery';
import path from 'path';
import fs from 'fs';
import {remote} from 'electron';
const info_path = path.join(remote.app.getPath("userData"), "./urlList.json");
let url;
let timerId;
let updateDuration = localStorage.settings
 ? JSON.parse(localStorage.settings).updateDuration
 : 5;


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    url = this.props.url;
    this.state = {
      data: [],
      updated: moment().format('HH:mm:ss'),
      isFetching: true
    };
    this.load = this.load.bind(this);
    this.setLoadDuration = this.setLoadDuration.bind(this);
    this.clearLoadDuration = this.clearLoadDuration.bind(this);
    this.setSettings = this.setSettings.bind(this);
  }
  load() {
    var setState = this;
    setState.setState({isFetching: true});
    // まずはlocalStorageからデータを取得し、セットする。
    if (localStorage) {
      console.log('get from localStorage');
      if (localStorage.rss) {
        let localRss = JSON.parse(localStorage.rss);
        console.log(localRss);
        setState.setState({data: localRss, updated: moment().format('HH:mm:ss')});
      }
    }

    var urlList = JSON.parse(fs.readFileSync(info_path, 'utf8'));
    console.log(urlList);
    var dataList = [];

    var promiseList = urlList.map((items, idx) => {
      return (new Promise((resolve, reject) => {
        var protocol = (items.url.startsWith('https:')
          ? https
          : http);
        protocol.get(items.url, (res) => {
          var parser = new FeedMe(true);
          parser.on('item', (rssItems) => {
            rssItems.name = items.name;

            rssItems.created = rssItems.pubdate
              ? Date.parse(rssItems.pubdate)
              : Date.parse(rssItems.updated);
          });
          res.pipe(parser);
          console.log('parser start:' + moment().format('HH:mm:ss'));
          parser.on('end', () => {
            console.log('parser end:' + moment().format('HH:mm:ss'));
            resolve(parser.done());
          });
        });
      }))

    });
    Promise.all(promiseList).then((arr) => {
      arr.map((rss, idx) => {
        Array.prototype.push.apply(dataList, rss.items);
      });

      dataList.sort((val1, val2) => {
        var val1 = val1.created;
        var val2 = val2.created;
        if (val1 < val2) {
          return 1;
        } else {
          return -1;
        }
      });
      if (localStorage) {
        localStorage.rss = JSON.stringify(dataList);
      }

      setState.setState({data: dataList, updated: moment().format('HH:mm:ss'), isFetching: false});
    });

  }
  setSettings(min) {
    localStorage.settings = JSON.stringify({updateDuration: parseInt(min)});
  }
  setLoadDuration(min) {
    if (timerId) {
      this.clearLoadDuration();
    }
    this.load();
    timerId = setInterval(this.load, parseInt(min) * 1000 * 60);
    this.setSettings(min);
  }
  clearLoadDuration() {
    clearInterval(timerId);
  }
  componentDidMount() {
    this.setLoadDuration(updateDuration);
  }
  render() {
    var scrollTop = () => {
      $('html, body').animate({scrollTop: 0});
    }

    return (
      <div>
        <Side load={this.load} moment={moment} info_path={info_path} setLoadDuration={this.setLoadDuration} updateDuration={updateDuration}/>
        <header className="header-items">
          <div className="header-content">
            <HomeIcon onClick={scrollTop} className="home"/>
            <h1>Rss-Reader in React-Electron</h1>
            <time className='updated'>updated:{this.state.updated}</time>
          </div>
        </header>

        <ItemNodes data={this.state.data} isFetching={this.state.isFetching}/>
      </div>
    );
  }
}

const rootDOM = document.getElementById("root-dom");

ReactDOM.render(
  <MyApp/>, rootDOM);

module.exports = MyApp
