'use strict';

import React from 'react';
import {Icon, Sidebar, Menu} from 'semantic-ui-react'
import moment from 'moment';
import RssListModal from './rssListModal.jsx';
import SettingsModal from './settingsModal.jsx';
import styles from '../styles/side.css';
import * as actionUtils from '../actions/actionUtils';

const getMMDD = () => {
  return moment().format('M/D');
}
const HHmmss = () => {
  return moment().format('HH:mm:ss');
}

class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MMDD: getMMDD(),
      HHmmss: HHmmss()
    }
    this.loadItemList = this.loadItemList.bind(this);
  }
  componentDidMount() {
    const setTime = () => {
      this.setState({MMDD: getMMDD(), HHmmss: HHmmss()});
    };
    setInterval(setTime, 1000);
  }
  loadItemList(){
    actionUtils.loadItem(this.props.store, this.props.actions.loadingItemList, this.props.actions.loadItemList);
  }
  render() {
    return (
      <aside>
        <Sidebar as={Menu} size='small' width='very thin' visible={true} icon='labeled' vertical inverted>
          <Menu.Item header={false} link name='shutdown' as={Icon} className={styles.icon} onClick={this.props.actions.onShutDownClick}>
            <Icon color='red' name='shutdown'/>
          </Menu.Item>
          <Menu.Item link name='refresh' as={Icon} className={styles.icon} onClick={this.loadItemList}>
            <Icon name='refresh' loading={this.props.loading}/>
          </Menu.Item>
          <Menu.Item link name='rss' as={Icon} className={styles.icon} onClick={this.props.actions.onRssListModalClick}>
            <RssListModal actions={this.props.actions} open={this.props.rssListModal} rssList={this.props.rssList} store={this.props.store}/>
          </Menu.Item>
          <Menu.Item link name='minus square' as={Icon} className={styles.icon} onClick={this.props.actions.onMimizeClick}>
            <Icon color='green' name='minus square'/>
          </Menu.Item>
          <Menu.Item link name='settings' as={Icon} className={styles.icon} onClick={this.props.actions.onSettingsModalClick}>
            <SettingsModal actions={this.props.actions} open={this.props.settingsModal}/>
          </Menu.Item>
          <Menu.Item link name='github' as={Icon} className={styles.icon} onClick={this.props.actions.onOpenGithubClick}>
            <Icon color='olive' name='github'/>
          </Menu.Item>
        </Sidebar>
        <div className={styles.sidetime}>
          <time className='MMDD'>{this.state.MMDD}</time>
          <br/>
          <time className='HHmmss'>{this.state.HHmmss}</time>
        </div>
      </aside>
    )
  }
}

module.exports = Side
