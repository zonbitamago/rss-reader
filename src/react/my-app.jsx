"use strict";

const React = require("react");
const feed = require('rss-to-json');
const HomeIcon = require('react-icons/lib/ti/home-outline');
const ItemNodes = require('./itemNodes');
const Side = require('./side');
const moment = require('moment');
const $ = require("jquery");
let url;
let load;

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    url = this.props.url;
    this.state = {
      data: [],
      updated: moment().format('HH:mm:ss')
    };
  }
  render() {
    var scrollTop = function() {
      $('html, body').animate({scrollTop: 0});
    }

    return (
      <div>
        <Side load={load} moment={moment}/>
        <header className="header">
          <div className="header-content">
            <HomeIcon onClick={scrollTop} className="home"/>
            <h1>Rss-Reader in React-Electron</h1>
            <time className='updated'>updated:{this.state.updated}</time>
          </div>
        </header>

        <ItemNodes url={url} data={this.state.data}/>
      </div>
    );
  }
  componentDidMount() {

    var setState = this;
    load = function() {
      // まずはlocalStorageからデータを取得し、セットする。
      if (localStorage) {
        console.log('get from localStorage');
        if (localStorage.rss) {
          let localRss = JSON.parse(localStorage.rss);
          console.log(localRss);
          setState.setState({data: localRss, updated: moment().format('HH:mm:ss')});
        }
      }

      // 表示速度改善のため、非同期処理とする。
      setTimeout(
      // 実際にRSSをHTTP経由で取得
      feed.load(url, function(err, rss) {
        rss.items.sort(function(val1, val2) {
          var val1 = val1.created;
          var val2 = val2.created;
          if (val1 < val2) {
            return 1;
          } else {
            return -1;
          }
        });
        console.log('get from http');
        console.log(rss.items);
        if (localStorage) {
          localStorage.rss = JSON.stringify(rss.items);
        }
        setState.setState({data: rss.items, updated: moment().format('HH:mm:ss')});
      }), 0);
    }
    load();
    setInterval(load, 1000 * 60 * 5);
  }
}

const rootDOM = document.getElementById("root-dom");

// 「https://newsformat.jp/」利用
ReactDOM.render(
  <MyApp url='http://newsformat.jp/r/z0xvr4soEhJBI!1.xml'/>, rootDOM);

module.exports = MyApp
