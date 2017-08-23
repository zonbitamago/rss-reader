'use strict';

import React from 'react';
import Loading from 'react-loading-animation';
import ItemPanel from './itemPanel.jsx'

class ItemNodes extends React.Component {
  constructor(props) {
    super(props);
  };
  render() {
    var nodes = this.props.data.map((items, idx) => {

      return (<ItemPanel idx={idx} items={items}/>)
    });
    return (
      <main className='body-content'>
        <Loading isLoading={this.props.isFetching}>
          {nodes}
        </Loading>
      </main>
    );
  }
}

module.exports = ItemNodes
