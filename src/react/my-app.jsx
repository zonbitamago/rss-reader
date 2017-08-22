"use strict";

import './style/index.css'
const React = require("react");
const ReactDOM = require("react-dom");
const FeedMe = require('feedme');
const http = require('http');
const https = require('https');
const HomeIcon = require('react-icons/lib/ti/home-outline');
const ItemNodes = require('./itemNodes.jsx');
const Side = require('./side.jsx');
const moment = require('moment');
const $ = require("jquery");
const path = require("path");
const fs = require("fs");
const info_path = path.join(require('electron').remote.app.getPath("userData"), "./urlList.json");
let url;
let load;

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    url = this.props.url;
    this.state = {
      data: [],
      updated: moment().format('HH:mm:ss'),
      isFetching: true
    };
  }
  render() {
    var scrollTop = function() {
      $('html, body').animate({scrollTop: 0});
    }

    return (
      <div>
        <Side load={load} moment={moment} info_path={info_path}/>
        <header className="header">
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
  componentDidMount() {

    var setState = this;
    load = function() {
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

      var promiseList = urlList.map(function(items, idx) {
        return (new Promise(function(resolve, reject) {
          var protocol = (items.url.startsWith('https:')
            ? https
            : http);
          protocol.get(items.url, function(res) {
            var parser = new FeedMe(true);
            parser.on('item', function(rssItems) {
              rssItems.name = items.name;

              rssItems.created = rssItems.pubdate
                ? Date.parse(rssItems.pubdate)
                : Date.parse(rssItems.updated);
            });
            res.pipe(parser);
            parser.on('end', function() {
              resolve(parser.done());
            });
          });
        }))

      });
      Promise.all(promiseList).then(function(arr) {
        arr.map(function(rss, idx) {
          Array.prototype.push.apply(dataList, rss.items);
        });

        dataList.sort(function(val1, val2) {
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
    load();
    setInterval(load, 1000 * 60 * 5);
  }
}

const rootDOM = document.getElementById("root-dom");

ReactDOM.render(
  <MyApp/>, rootDOM);

module.exports = MyApp
