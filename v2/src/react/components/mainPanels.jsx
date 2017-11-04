'use strict';

import React from 'react';
import {Button, Menu} from 'semantic-ui-react';

import Head from './head.jsx';
import ItemPanel from './itemPanel.jsx';
import styles from '../styles/mainPanels.css';

class MainPanels extends React.Component {
  componentWillMount() {
    this.props.store.dispatch(this.props.actions.loadItemList());
  }
  render() {
    var itemPanel;
    if (this.props.itemList != undefined) {
      itemPanel = this.props.itemList.map((item, idx) => {
        return (<ItemPanel key={idx} item={item}/>);
      });
    }
    return (<section className={styles.mainPanels}>
      <Head actions={this.props.actions}/> {itemPanel}
    </section>)
  }
}

module.exports = MainPanels
