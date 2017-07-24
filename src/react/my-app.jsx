"use strict";

const React = require("react");
const rss2json = require("../rss2json");
let url;
let data = Array();

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
    url = this.props.url;
  }
  render() {
    var itemNodes = this.state.data.map(function(items) {
      return (
        <div>{items.title}</div>
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
    this.loadajax();
    setInterval(this.loadajax, 5000);
    // console.log(this);
  }
  loadajax() {
    data = rss2json(url);
    // console.log(data);
  }
}

const rootDOM = document.getElementById("root-dom");

ReactDOM.render(
  <MyApp url='https://www.lifehacker.jp/feed/index.xml'/>, rootDOM);

module.exports = MyApp
