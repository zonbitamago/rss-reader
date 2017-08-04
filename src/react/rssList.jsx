const React = require("react");
const fs = require("fs");
const path = require("path");
const info_path = path.join("./urlList.json");

class RssList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: ""
    }
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
      console.log(urlList);
      liNodes = urlList.map(function(items, idx) {
        return (
          <li key={idx}>{items.name}</li>
        )
      });
    }

    let setState = this;

    let changeName = function(e) {
      setState.state.name = e.target.value;
    }

    let changeURL = function(e) {
      setState.state.url = e.target.value;
    }

    let save = function(e) {
      console.log(setState.state);
      // fs.writeFile(info_path, JSON.stringify(setState.state.toString()), function(err) {
      //   console.log('err');
      //   console.log(err);
      // });
      setState.setState({name:"",url:""});
      console.log(setState.state);
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
                <input type='text' onChange={changeName}/>
              </td>
            </tr>
            <tr>
              <td>
                url:
              </td>
              <td>
                <input type='text' onChange={changeURL}/>
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
