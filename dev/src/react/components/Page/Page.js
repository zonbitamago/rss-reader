import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Page.css";
import Side from "../Side/Side";
import Header from "../Header/Header";

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Page">
        <Side electronUtil={this.props.electronUtil} />
        <Header />
      </div>
    );
  }
}

Page.propTypes = {};

Page.defaultProps = {};

export default Page;
