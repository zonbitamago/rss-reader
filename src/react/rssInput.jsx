const React = require("react");
const fs = require("fs");
const path = require("path");
const FeedMe = require('feedme');
const http = require('http');
const https = require('https');
let info_path;
let set = new Set();

class RssInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: ""
    }
    info_path = this.props.info_path;

    this.changeName = this.changeName.bind(this);
    this.changeURL = this.changeURL.bind(this);
    this.save = this.save.bind(this);
    this.setURLContent = this.setURLContent.bind(this);
  };
  changeName(e) {
    this.setState({name: e.target.value});
  };

  changeURL(e) {
    this.setState({url: e.target.value});
  };

  setURLContent() {
    var state = this;
    if (this.props.set.size == 0) {
      this.props.set.add(state.state);
    } else {
      var exists = false;
      this.props.set.forEach(function(val) {
        if (val.name == state.state.name) {
          exists = true;
          val.url = state.state.url;
        }
      });

      if (!exists) {
        this.props.set.add(state.state);
      }
    }
  };

  save() {
    var state = this;
    var url = state.state.url;
    var promise = new Promise(function(resolve, reject) {
      var protocol = (url.startsWith('https:')
        ? https
        : http);
      protocol.get(url, function(res) {
        var parser = new FeedMe(true);
        res.pipe(parser);
        parser.on('end', function() {
          resolve(parser.done());
        });
      });
    });

    promise.then(function(rss) {
      state.setURLContent();

      console.log('set:', state.props.set);
      fs.writeFileSync(info_path, JSON.stringify([...state.props.set]), function(err) {
        console.log('err');
        console.log(err);
      });
      state.props.parent.forceUpdate();
      console.log('save');

      state.props.load();

    }, function(err) {
      console.log('err:');
      console.log(err);
      alert('登録できないURLです。');
    });

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
