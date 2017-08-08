const React = require("react");
const fs = require("fs");
const path = require("path");
const info_path = path.join(require('electron').remote.app.getPath("userData"), "./urlList.json");
let set = new Set();

class RssInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: ""
    }
    this.changeName = this.changeName.bind(this);
    this.changeURL = this.changeURL.bind(this);
    this.save = this.save.bind(this);
    this.setURLContent = this.setURLContent.bind(this);
  };
  changeName(e) {
    this.setState({name:e.target.value});
  };

  changeURL(e) {
    this.setState({url:e.target.value});
  };

  setURLContent() {
    var state = this;
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

      if (!exists) {
        set.add(state.state);
      }
    }
  };

  save() {
    this.setURLContent();

    console.log('set:', set);
    fs.writeFileSync(info_path, JSON.stringify([...set]), function(err) {
      console.log('err');
      console.log(err);
    });
    console.log('save');
  };

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                name:
              </td>
              <td>
                <input type='text' value={this.state.name} onChange={this.changeName}/>
              </td>
            </tr>
            <tr>
              <td>
                url:
              </td>
              <td>
                <input type='text' value={this.state.url} onChange={this.changeURL}/>
              </td>
            </tr>
          </tbody>
        </table>
        <br/>
        <button onClick={this.save}>save</button>
      </div>
    );
  }
}

module.exports = RssInput
