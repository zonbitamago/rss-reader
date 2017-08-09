const React = require("react");
const RssInput = require('./rssInput.jsx');
const fs = require("fs");
const path = require("path");
const info_path = path.join(require('electron').remote.app.getPath("userData"), "./urlList.json");
let set;

class RssList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: ""
    }
    this.isExists = this.isExists.bind(this);
  };
  isExists(file) {
    try {
      fs.statSync(file);
      return true
    } catch (err) {
      if (err.code === 'ENOENT')
        return false
    }
  };

  render() {
    let liNodes = "";
    set = new Set();
    let setState = this;

    let clearURLContent = function(set, name) {
      var delState;
      set.forEach(function(val) {
        if (val.name == name) {
          delState = val;
        }
      });
      set.delete(delState);
    };

    let delItem = function(e) {
      console.log('delItem');
      clearURLContent(set, e.target.value);
      fs.writeFileSync(info_path, JSON.stringify([...set]), function(err) {
        console.log('err');
        console.log(err);
      });
      setState.forceUpdate();
      console.log(set);
    };

    if (this.isExists(info_path)) {
      let urlList = JSON.parse(fs.readFileSync(info_path, 'utf8'));
      console.log(urlList);
      liNodes = urlList.map(function(items, idx) {
        set.add(items);
        var openBrowser = function() {
          //メインプロセスへ送信する
          require("electron").ipcRenderer.send('openBrowser', items.url);
        };
        return (
          <li className='rssList' key={idx}>
            <input type='checkbox' onChange={delItem} value={items.name}/>
            <a href='#' onClick={openBrowser}>{items.name}</a>
          </li>
        )
      });
    }

    return (
      <div>
        <ul>
          {liNodes}
        </ul>
        <RssInput parent={setState} set={set}/>
      </div>
    );
  }
}

module.exports = RssList
