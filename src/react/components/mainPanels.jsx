'use strict';

import React from 'react';
import {Button, Menu} from 'semantic-ui-react';

import Head from './head.jsx';
import ItemPanel from './itemPanel.jsx';
import * as actionUtils from '../actions/actionUtils';
import styles from '../styles/mainPanels.css';

class MainPanels extends React.Component {
  componentWillMount() {
    var loadItem = () => {
      actionUtils.loadItem(this.props.store, this.props.actions.loadingItemList, this.props.actions.loadItemList);
    }
    loadItem();
    setInterval(loadItem,this.props.updateInterval);
  }
  render() {
    var itemPanel;
    if (this.props.itemList != undefined) {
      itemPanel = this.props.itemList.map((item, idx) => {
        return (<ItemPanel key={idx} item={item}/>);
      });
    }
    return (<section className={styles.mainPanels}>
      <Head actions={this.props.actions} updated={this.props.updated}/>
      <div className={styles.itemPanel}>
        {itemPanel}
      </div>
    </section>)
  }
}

module.exports = MainPanels
