const React = require("react");
const fs = require("fs");
const path = require("path");
const info_path = path.join("./urlList.json");

class RssList extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    let urlList = JSON.parse(fs.readFileSync("./src/urlList.json", 'utf8'));
    let liNodes = urlList.map(function(items, idx) {
      return (
        <li key={idx}>{items.name}</li>
      )
    });

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
