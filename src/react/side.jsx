const React = require("react");
const RSS = require('react-icons/lib/ti/rss');
const UPDATE = require('react-icons/lib/ti/arrow-sync');
const ReactTooltip = require('react-tooltip')
const RssList = require('./rssList');

class Side extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <aside className='sidebar'>
        <nav>
          <div className='sidefixed'>
            <UPDATE className='sideicon update' onClick={this.props.load}/>
            <br/>
            <RSS className='sideicon rss' data-tip data-for='rss' data-event='click focus'/>
          </div>
          <ReactTooltip scrollHide={false} place="right" id='rss' type="success" effect="solid" globalEventOff=''>
            <RssList/>
          </ReactTooltip>
        </nav>
      </aside>
    );
  }
}

module.exports = Side
