'use strict';

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Side from '../components/side.jsx';
import MainPanels from '../components/mainPanels.jsx';
import styles from '../styles/app.css';
import * as actions from '../actions/index.js';


export class App extends React.Component {
  render() {
    const {mapstate, actions} = this.props;
    return (
      <main className={styles.main}>
        <Side actions={actions}/>
        <MainPanels/>
      </main>
    )
  }
}

const mapState = (state, ownProps) => ({mapstate: state.power});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapState, mapDispatch)(App);
