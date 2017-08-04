const React = require("react");
const fs = require("fs");
const path = require("path");
const info_path = path.join("./urlList.json");
let set;

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
    set = new Set();

    if (isExists(info_path)) {
      let urlList = JSON.parse(fs.readFileSync(info_path, 'utf8'));
      console.log(urlList);
      liNodes = urlList.map(function(items, idx) {
        set.add(items);
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

    let setURLContent = function(set, state) {
      if (set.size == 0) {
        set.add(state.state);
      } else {
        var exists = false;
        set.forEach(function(val) {
          if (val.name == state.state.name) {
            exists = true;
            val.url = state.state.url;
          }
        });

        if(!exists){
          set.add(state.state);
        }
      }
    };

    let save = function(e) {
      setURLContent(set, setState);

      // set.add(setState.state);
      console.log('set:', set);
      fs.writeFileSync(info_path, JSON.stringify([...set]), function(err) {
        console.log('err');
        console.log(err);
      });
      setState.setState({name: "", url: ""});
      // console.log(setState.state);
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
                <input type='text' value={setState.name} onChange={changeName}/>
              </td>
            </tr>
            <tr>
              <td>
                url:
              </td>
              <td>
                <input type='text' value={setState.url} onChange={changeURL}/>
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
