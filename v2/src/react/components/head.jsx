'use strict';

import React from 'react';
import {Button, Menu, Icon, Header} from 'semantic-ui-react'

class Head extends React.Component {
  render() {
    return (
      <Menu pointing secondary color='blue' inverted>
        <Menu.Item>
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
