import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Icon.css";

class Icon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="Icon">{this.props.children}</div>;
  }
}

Icon.propTypes = {};

Icon.defaultProps = {};

export default Icon;
