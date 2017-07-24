"use strict";

const React = require("react");
const feed = require('rss-to-json');
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
    var itemNodes = this.state.data.map(function(items, idx) {
      return (
        <li key={idx}>{items.title}</li>
      )
    });
    return (
      <div>
        <h1>React in Electron!</h1>
        {itemNodes}
      </div>
    );
  }
  componentDidMount() {
    var setState = this;
    this.loadajax(setState);
    setInterval(this.loadajax(setState), 10000);
  }
  loadajax(obj) {
    feed.load(url, function(err, rss) {
      obj.setState({data: rss.items});
    });
  }
}

const rootDOM = document.getElementById("root-dom");

ReactDOM.render(
  <MyApp url='https://www.lifehacker.jp/feed/index.xml'/>, rootDOM);

module.exports = MyApp
