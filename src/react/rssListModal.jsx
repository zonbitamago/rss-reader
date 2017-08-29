'use strict';
import React from 'react';
import RssInput from './rssInput.jsx';
import fs from 'fs';
import path from 'path';
import {ipcRenderer} from 'electron';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
let info_path;
let set;

class RssList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      url: "",
      open:false
    }
    info_path = this.props.info_path;
    this.isExists = this.isExists.bind(this);
    this.save = this.save.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  };
  isExists(file) {
    try {
      fs.statSync(file);
      return true
    } catch (err) {
      if (err.code === 'ENOENT')
        return false
    }
  };
  handleOpen(){
    this.setState({
      name: this.state.name,
      url: this.state.url,
      open: true
    })
  };
  handleClose(){
    this.setState({
      name: this.state.name,
      url: this.state.url,
      open: false
    })
  };
  save(){
    console.log('save');
    console.log(this.refs.input);
    this.refs.input.save();
  };

  render() {
    let liNodes = "";
    set = new Set();
    let setState = this;

    let clearURLContent = (set, name) => {
      var delState;
      set.forEach((val) => {
        if (val.name == name) {
          delState = val;
        }
      });
      set.delete(delState);
    };

    let delItem = (e) => {
      if (confirm('削除しますか?')) {
        console.log('delItem');
        clearURLContent(set, e.target.value);
        fs.writeFileSync(info_path, JSON.stringify([...set]), (err) => {
          console.log('err');
          console.log(err);
        });
        setState.forceUpdate();
        console.log(set);

        setState.props.load();
      }
    };

    if (this.isExists(info_path)) {
      let urlList = JSON.parse(fs.readFileSync(info_path, 'utf8'));
      // console.log(urlList);
      liNodes = urlList.map((items, idx) => {
        set.add(items);
        var openBrowser = () => {
          //メインプロセスへ送信する
          ipcRenderer.send('openBrowser', items.url);
        };
        return (
          <li className='rssList' key={idx}>
            <input type='checkbox' onChange={delItem} value={items.name}/>
            <a href='#' onClick={openBrowser}>{items.name}</a>
          </li>
        )
      });
    }

    return (
      <Modal
        className='rssListModal'
        open={this.state.open}
        onClose={this.handleClose}
        trigger={<Icon onClick={this.handleOpen} color='yellow' name='rss'/>}
      >
        <Modal.Content scrolling>
          <div>
            <ul>
              {liNodes}
            </ul>
            <RssInput ref='input' parent={setState} set={set} info_path={info_path} load={this.props.load}/>
          </div>
        </Modal.Content>
        <Modal.Actions>
          <Button color='red' onClick={this.handleClose}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' onClick={this.save}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

module.exports = RssList
