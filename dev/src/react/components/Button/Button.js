import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Button.css";
import MaterialButton from "material-ui/Button";

const StyleYes = {
  background: "#448AFF",
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
          <MaterialButton variant="raised" style={StyleYes}>
            Yes
          </MaterialButton>
        </div>
      );
    } else if (this.props.type == "no") {
      return (
        <div className="Button">
          <MaterialButton variant="raised" style={StyleNo}>
            No
          </MaterialButton>
        </div>
      );
    }
  }
}

Button.propTypes = { type: PropTypes.string.isRequired };

Button.defaultProps = {};

export default Button;
