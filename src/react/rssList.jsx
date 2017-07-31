const React = require("react");
const fs = require("fs");
const path = require("path");
const info_path = path.join(__dirname,"./urlList.json");

class RssList extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    var urlList = JSON.parse(fs.readFileSync(info_path, 'utf8'));
    var liNodes = urlList.map(function(items, idx) {
      return (
        <li  key={idx}>{items.name}</li>
      )
    });
    return (
      <ul>
        {liNodes}
      </ul>
    );
  }
}

module.exports = RssList
