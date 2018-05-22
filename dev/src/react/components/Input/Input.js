import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Input.css";
import TextField from "@material-ui/core/TextField";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { val: "" };
  }

  render() {
    return (
      <div className="Input">
        <TextField
          required
          id={this.props.name}
          label={this.props.name}
          onChange={e => {
            this.setState({ val: e.target.value });
          }}
        />
      </div>
    );
  }
}

Input.propTypes = { name: PropTypes.string.isRequired };

Input.defaultProps = {};

export default Input;
