import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.css";
import MaterialButton from "@material-ui/core/Button";

const StyleYes = {
  background: "#03A9F4",
  color: "white",
  borderRadius: "5px"
};

const StyleNo = {
  background: "#FF1744",
  color: "white",
  borderRadius: "5px"
};

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.type == "yes") {
      return (
        <div className="Button">
          <MaterialButton
            id="yes"
            onClick={this.props.handleClick}
            variant="raised"
            style={StyleYes}
          >
            Yes
          </MaterialButton>
        </div>
      );
    } else if (this.props.type == "no") {
      return (
        <div className="Button">
          <MaterialButton
            id="no"
            onClick={this.props.handleClick}
            variant="raised"
            style={StyleNo}
          >
            No
          </MaterialButton>
        </div>
      );
    }
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleClick: PropTypes.func
};

Button.defaultProps = {};

export default Button;
