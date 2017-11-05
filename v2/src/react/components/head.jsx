'use strict';

import React from 'react';
import {Button, Menu, Icon, Header} from 'semantic-ui-react'
import styles from '../styles/head.css';


class Head extends React.Component {
  render() {
    return (
      <Menu pointing secondary color='blue' inverted className={styles.head}>
        <Menu.Item link onClick={this.props.actions.onHomeClick}>
          <Icon name='home' size='large'/>
        </Menu.Item>
        <Menu.Item>
          <Header as='h3' inverted>Home</Header>
        </Menu.Item>
      </Menu>
    )
  }
}

module.exports = Head
