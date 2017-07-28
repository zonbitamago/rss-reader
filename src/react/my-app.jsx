"use strict";

const React = require("react");
const feed = require('rss-to-json');
const HomeIcon = require('react-icons/lib/ti/home-outline');
const ItemNodes = require('./itemNodes');
const $ = require("jquery");
let url;

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    url = this.props.url;
    this.state = {
      data: []
    };
  }
  render() {
    var scrollTop = function() {
      $('html, body').animate({scrollTop: 0});
    }

    return (
      <div>
        <header className="header">
          <div className="header-content">
            <HomeIcon onClick={scrollTop} className="home"/>
            <h1>Rss-Reader in React-Electron</h1>
          </div>
        </header>
        <ItemNodes url={url} data={this.state.data}/>
      </div>
    );
  }
  componentDidMount() {
    var setState = this;
    var load = function() {
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
        console.log(rss.items);
        setState.setState({data: rss.items});
      });
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
