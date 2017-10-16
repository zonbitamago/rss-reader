'use strict';

import React from 'react';
import {Button, Header, Icon, Modal, Input, Label} from 'semantic-ui-react';
import styles from '../styles/rssListModal.css';

class RssListModal extends React.Component {
  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.actions.onRssListModalClick}
        trigger={<Icon color='yellow' name='rss' />}
        className={styles.background}
      >
        <Modal.Header>RssList</Modal.Header>
        <Modal.Content scrolling>
          <div>
            <ul></ul>
            <ul className={styles.rssInputList}>
              <li>
              <Input
                labelPosition='left'
                placeholder='Enter Name'
                className={styles.rssInputTag}
              >
                <Label tag>Name</Label>
                <input/>
              </Input>
              </li>
              <li>
              <Input
                labelPosition='left'
                placeholder='Enter URL'
                className={styles.rssInputTag}
              >
                <Label tag>URL</Label>
                <input/>
              </Input>
              </li>
            </ul>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.props.actions.onRssListModalClick}>
            <Icon name='remove'/>
            No
          </Button>
          <Button color='green' onClick={this.props.actions.onRssInputClick}>
            <Icon name='checkmark'/>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

module.exports = RssListModal
