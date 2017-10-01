'use strict';

import React from 'react';
import Side from './side.jsx';
import MainPanels from './mainPanels.jsx';

class App extends React.Component {
  render() {
    return (
      <main>
        Hello World!!
        <Side/>
        <MainPanels/>
      </main>
    )
  }
}


module.exports = App
