'use strict';

import React from 'react';
import {Button, Header, Icon, Modal, Input, Label} from 'semantic-ui-react';
import styles from '../styles/rssListModal.css';

class RssListModal extends React.Component {
  constructor(){
    super();
    this.state={
      name:'',
      url:''
    };
    this.changeName = this.changeName.bind(this);
    this.changeURL = this.changeURL.bind(this);
    this.onRssListModalClick = this.onRssListModalClick.bind(this);
  };
  changeName(e) {
    this.setState({name: e.target.value});
  };

  changeURL(e) {
    this.setState({url: e.target.value});
  };
  onRssListModalClick(){
    this.props.actions.onRssInputClick(this.state.name, this.state.url);
  }
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
                <input value={this.state.name} onChange={this.changeName}/>
              </Input>
              </li>
              <li>
              <Input
                labelPosition='left'
                placeholder='Enter URL'
                className={styles.rssInputTag}
              >
                <Label tag>URL</Label>
                <input value={this.state.url} onChange={this.changeURL}/>
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
          <Button color='green' onClick={this.onRssListModalClick}>
            <Icon name='checkmark'/>
            Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

module.exports = RssListModal
