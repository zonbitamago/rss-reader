const React = require("react");
const RSS = require('react-icons/lib/ti/rss');
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
          <RSS className='sideicon rss' data-tip data-for='rss' data-event='click focus'/>
          <ReactTooltip place="right" id='rss' type="light" effect="solid" globalEventOff='click'>
            <RssList/>
          </ReactTooltip>
        </nav>
      </aside>
    );
  }
}

module.exports = Side
