'use strict';

import React from 'react';
import {Button, Menu} from 'semantic-ui-react'

import Head from './head.jsx';
import styles from '../styles/mainPanels.css'

class MainPanels extends React.Component {
  render() {
    return (
      <section className={styles.mainPanels}>
        <Head/>
      </section>
    )
  }
}

module.exports = MainPanels
