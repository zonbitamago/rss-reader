const React = require("react");
const fs = require("fs");
const path = require("path");
const info_path = path.join("./src/urlList.json");

class RssList extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    var isExists = function(file) {
      try {
        fs.statSync(file);
        return true
      } catch (err) {
        if (err.code === 'ENOENT')
          return false
      }
    }
    let liNodes = "";

    if (isExists(info_path)) {
      // let urlList = JSON.parse('[{  "name": "test1","url": "urs"}, {  "name": "test2",  "url": "url2"}]');
      let urlList = JSON.parse(fs.readFileSync(info_path, 'utf8'));
      liNodes = urlList.map(function(items, idx) {
        return (
          <li key={idx}>{items.name}</li>
        )
      });
    }

    let save = function() {
      console.log('save');
    };
    return (
      <div>
        <ul>
          {liNodes}
        </ul>
        <table>
          <tbody>
            <tr>
              <td>
                name:
              </td>
              <td>
                <input type='text'/>
              </td>
            </tr>
            <tr>
              <td>
                url:
              </td>
              <td>
                <input type='text'/>
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <button onClick={save}>save</button>
      </div>
    );
  }
}

module.exports = RssList
