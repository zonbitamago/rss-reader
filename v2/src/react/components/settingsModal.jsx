'use strict';

import React from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
  Input,
  Label
} from 'semantic-ui-react';
import styles from '../styles/settingsModal.css';
import * as actionUtils from '../actions/actionUtils';

var timerID;

export default class SettingsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: this.props.updateDuration,
      isNumber: true
    };
    this.changeDuration = this.changeDuration.bind(this);
    this.setSettings = this.setSettings.bind(this);
    this.setTimer = this.setTimer.bind(this);
  };
  changeDuration(e) {
    this.setState({duration: e.target.value, isNumber:!isNaN(e.target.value)});
  };
  componentWillMount(){
    this.setTimer()
  };
  setSettings(){
    this.props.actions.setSettings(this.state.duration);
    this.setTimer();
  };
  setTimer(){
    var loadItem = () => {
      actionUtils.loadItem(this.props.store, this.props.actions.loadingItemList, this.props.actions.loadItemList);
    }
    if(timerID != undefined){
      clearInterval(timerID);
    }
    timerID = setInterval(loadItem, this.props.updateDuration * 60 * 1000);
  }
  render() {
    return (<Modal open={this.props.open} onClose={this.props.actions.onSettingsModalClick} trigger={<Icon color = 'teal' name = 'settings' />}>
      <Modal.Header>Settings</Modal.Header>
      <Modal.Content scrolling>
        <div>
          <ul className={styles.settingsInputList}>
            <li>
              <Input labelPosition='left' placeholder='Enter' className={styles.settingsInputTag}>
                <Label tag>Update Duration</Label>
                <Input error={!this.state.isNumber} value={this.state.duration} onChange={this.changeDuration} className={styles.settingsInput}/>
                <Label basic>min</Label>
              </Input>
            </li>
          </ul>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={this.props.actions.onSettingsModalClick}>
          <Icon name='remove'/>
          No
        </Button>
        <Button color='green' disabled={!this.state.isNumber || this.state.duration.length == 0} onClick={this.setSettings}>
          <Icon name='checkmark'/>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>);
  }
}
