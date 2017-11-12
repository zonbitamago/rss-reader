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

export default class SettingsModal extends React.Component {
  constructor() {
    super();
    this.state = {
      duration: ''
    };
    this.changeDuration = this.changeDuration.bind(this);
  };
  changeDuration(e) {
    this.setState({duration: e.target.value});
  };

  render() {
    return (<Modal open={this.props.open} onClose={this.props.actions.onSettingsModalClick} trigger={<Icon color = 'teal' name = 'settings' />}>
      <Modal.Header>Settings</Modal.Header>
      <Modal.Content scrolling>
        <div>
          <ul className={styles.settingsInputList}>
            <li>
              <Input labelPosition='left' placeholder='Enter' className={styles.settingsInputTag}>
                <Label tag>Update Duration</Label>
                <input value={this.state.duration} onChange={this.changeDuration}/>
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
        <Button color='green'>
          <Icon name='checkmark'/>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>);
  }
}
