'use strict';

import React from 'react';
import Loading from 'react-loading-animation';
import {Dimmer, Loader} from 'semantic-ui-react'
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
        <Dimmer className='Loading' page active={this.props.isFetching}>
          <Loader>Loading</Loader>
        </Dimmer>
        {nodes}
      </main>
    )
  }
}

module.exports = ItemNodes
