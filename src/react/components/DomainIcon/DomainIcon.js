import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./DomainIcon.css";

class DomainIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DomainIcon">
        <img alt={this.props.alt} src={this.props.src} />
      </div>
    );
  }
}

DomainIcon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

DomainIcon.defaultProps = {};

export default DomainIcon;
