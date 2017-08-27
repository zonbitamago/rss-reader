"use strict";

import React from 'react';
import ReactTooltip from 'react-tooltip';
import RssList from './rssList.jsx';
import {ipcRenderer} from 'electron';
import {Icon, Sidebar, Menu} from 'semantic-ui-react'

let moment;

const getMMDD = () => {
  return moment().format('M/D');
}
const HHmmss = () => {
  return moment().format('HH:mm:ss');
}

class Side extends React.Component {
  constructor(props) {
    super(props);
    moment = this.props.moment;
    this.state = {
      MMDD: getMMDD(),
      HHmmss: HHmmss()
    }
  };
  componentDidMount() {
    let setState = this;
    const setTime = () => {
      setState.setState({MMDD: getMMDD(), HHmmss: HHmmss()});
    };
    setInterval(setTime, 1000);
  }
  render() {
    var closeApp = () => {
      //メインプロセスへ送信する
      ipcRenderer.send('closeApp');
    };
    var openReadme = () => {
      //メインプロセスへ送信する
      ipcRenderer.send('openBrowser', 'https://github.com/zonbitamago/rss-reader/blob/master/README.md');
    };
    var minimizeApp = () =>{
      ipcRenderer.send('minimizeApp');
    };
    return (
      <aside className='sidebar'>
        <Sidebar as={Menu} text size='small' width='very thin' visible={true} icon='labeled' vertical inverted>
          <Menu.Item header={false} link name='shutdown' as={Icon}>
            <Icon color='red' name='shutdown' onClick={closeApp}/>
          </Menu.Item>
          <Menu.Item link name='refresh' as={Icon} onClick={this.props.load}>
            <Icon name='refresh'/>
          </Menu.Item>
          <Menu.Item link name='rss' as={Icon} data-tip data-for='rss' data-event='click'>
            <Icon color='yellow' name='rss'/>
          </Menu.Item>
          <Menu.Item link name='minus square' as={Icon} onClick={minimizeApp}>
            <Icon color='green' name='minus square'/>
          </Menu.Item>
          <Menu.Item link name='github' as={Icon}>
            <Icon color='olive' name='github' onClick={openReadme}/>
          </Menu.Item>
        </Sidebar>
        <ReactTooltip scrollHide={false} place="right" id='rss' type="success" effect="solid" globalEventOff=''>
          <RssList info_path={this.props.info_path} load={this.props.load}/>
        </ReactTooltip>
        <div className='sidetime'>
          <time className='MMDD'>{this.state.MMDD}</time>
          <br/>
          <time className='HHmmss'>{this.state.HHmmss}</time>
        </div>
      </aside>
    );
  }
}

module.exports = Side
