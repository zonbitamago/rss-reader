'use strict';

import React from 'react';
import {Button, Header, Icon, Modal} from 'semantic-ui-react'

class RssListModal extends React.Component {
  render() {
    return (
      <Modal
        trigger={<Icon color='yellow' name='rss' />}
      >
        <Modal.Header>RssList</Modal.Header>
        <Modal.Content scrolling>
          <div>
            <ul></ul>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red'>
            <Icon name='remove'/>
            No
          </Button>
          <Button color='green'>
            <Icon name='checkmark'/>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

module.exports = RssListModal
