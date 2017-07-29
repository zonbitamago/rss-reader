const React = require("react");
const RSS = require('react-icons/lib/ti/rss');
const Tooltip = require('rc-tooltip');

class Side extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    return (
      <aside className='sidebar'>
        <nav>
          <RSS className='sideicon rss'/>
        </nav>
      </aside>
    );
  }
}

module.exports = Side
