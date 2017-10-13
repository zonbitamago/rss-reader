'use strict';

import React from 'react';
import {Button, Header, Icon, Modal} from 'semantic-ui-react';
import styles from '../styles/rssListModal.css';

class RssListModal extends React.Component {
  render() {
    return (
      <Modal
        open={this.props.open}
        onClose={this.props.actions.onRssListModalClick}
        trigger={<Icon color='yellow' name='rss' />}
        className={styles.background}
        mountNode={document.querySelector('section')}
      >
        <Modal.Header>RssList</Modal.Header>
        <Modal.Content scrolling>
          <div>
            <ul></ul>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.props.actions.onRssListModalClick}>
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
