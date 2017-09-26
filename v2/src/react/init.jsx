'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class Init extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        Hello World!!
      </main>
    )
  }
}

const rootDom = document.getElementById("root-dom");
ReactDOM.render(
  <Init/>, rootDom);

module.exports = Init
