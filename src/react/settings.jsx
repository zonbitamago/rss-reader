'use strict';

import React from 'react';
import { Button, Header, Icon, Modal ,Input,Label} from 'semantic-ui-react'

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };
  handleOpen() {
    this.setState({open: true})
  };
  handleClose() {
    this.setState({open: false})
  };
  render() {
    return (
      <Modal
        className='sideModal'
        open={this.state.open}
        onClose={this.handleClose}
        trigger={<Icon onClick={this.handleOpen} color='teal' name='settings'/>}
      >
        <Modal.Header>Settings</Modal.Header>
        <Modal.Content scrolling>
          <div>
          <Input
            labelPosition='right'
            placeholder='Enter ms...'
          >
          <Label tag>Update Duration</Label>
          <input />
          <Label basic>ms</Label>
          </Input>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose}>
            <Icon name='remove'/>
            No
          </Button>
          <Button color='green' onClick={this.save}>
            <Icon name='checkmark'/>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

module.exports = Settings
