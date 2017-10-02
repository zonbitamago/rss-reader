'use strict';

import React from 'react';
import Side from './side.jsx';
import MainPanels from './mainPanels.jsx';
import styles from '../styles/app.css'

class App extends React.Component {
  render() {
    return (
      <main className={styles.main}>
        <Side/>
        <MainPanels/>
      </main>
    )
  }
}

module.exports = App
