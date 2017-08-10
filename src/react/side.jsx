const React = require("react");
const RSS = require('react-icons/lib/ti/rss');
const UPDATE = require('react-icons/lib/ti/arrow-sync');
const CLOSE = require('react-icons/lib/ti/delete-outline');
const ReactTooltip = require('react-tooltip')
const RssList = require('./rssList.jsx');
let moment;

const getMMDD = function() {
  return moment().format('M/D');
}
const HHmmss = function() {
  return moment().format('HH:mm:ss');
}

class Side extends React.Component {
  constructor(props) {
    super(props);
    moment = this.props.moment;
    this.state = {
      MMDD: getMMDD(),
      HHmmss: HHmmss()
    }
  };
  componentDidMount() {
    // setInterval(this.setState({time: this.props.moment().format()}), 1000);
    let setState = this;
    const setTime = function() {
      setState.setState({MMDD: getMMDD(), HHmmss: HHmmss()});
    };
    setInterval(setTime, 1000);
  }
  render() {
    var closeApp = function() {
      //メインプロセスへ送信する
      require("electron").ipcRenderer.send('closeApp');
    };
    return (
      <aside className='sidebar'>
        <nav>
          <div className='sidefixed'>
            <CLOSE className='sideicon delete' onClick={closeApp}/>
            <br/>
            <UPDATE className='sideicon update' onClick={this.props.load}/>
            <br/>
            <RSS className='sideicon rss' data-tip data-for='rss' data-event='click'/>
          </div>
          <ReactTooltip scrollHide={false} place="right" id='rss' type="success" effect="solid" globalEventOff=''>
            <RssList info_path={this.props.info_path}/>
          </ReactTooltip>
        </nav>
        <div className='sidetime'>
          <time className='MMDD'>{this.state.MMDD}</time>
          <br/>
          <time className='HHmmss'>{this.state.HHmmss}</time>
        </div>
      </aside>
    );
  }
}

module.exports = Side
