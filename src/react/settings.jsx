'use strict';

import React from 'react';
import { Button, Header, Icon, Modal ,Input,Label} from 'semantic-ui-react'

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateDuration: this.props.updateDuration,
      open: false,
      error: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.changeDuration = this.changeDuration.bind(this);
    this.isNum = this.isNum.bind(this);
  };
  handleOpen() {
    this.setState(
      {
        updateDuration: this.state.updateDuration,
        open: true,
        error: this.state.error
      }
    )
  };
  handleClose() {
    this.setState(
      {
        updateDuration: this.state.updateDuration,
        open: false,
        error: this.state.error
      }
    )
  };
  isNum(obj){
    return (isFinite(obj) && parseInt(obj) > 0) ? true : false;
  }
  changeDuration(e){
    var error = true;
    if(this.isNum(e.target.value)){
      error = false;
    }
    this.setState(
      {
        updateDuration: e.target.value,
        open: this.state.open,
        error: error
      }
    )

  }
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
            placeholder='Enter min...'
            error={this.state.error}
          >
          <Label tag className='setting-input-tag'>Update Duration</Label>
          <input value={this.state.updateDuration} onChange={this.changeDuration}/>
          <Label basic>min</Label>
          </Input>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose}>
            <Icon name='remove'/>
            No
          </Button>
          <Button color='green' disabled={this.state.error} onClick={this.props.setLoadDuration.bind(this,this.state.updateDuration)}>
            <Icon name='checkmark'/>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

module.exports = Settings
