import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Input.css";
import TextField from "@material-ui/core/TextField";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { val: this.props.value != undefined ? this.props.value : "" };
    this.changeVal = this.changeVal.bind(this);
  }

  changeVal(e) {
    this.setState({ val: e.target.value });
    if (this.props.changeParentVal != undefined) {
      this.props.changeParentVal(e.target.value);
    }
  }

  render() {
    return (
      <div className="Input">
        <TextField
          required
          id={this.props.name}
          label={this.props.name}
          onChange={this.changeVal}
          value={this.state.val}
        />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
  changeParentVal: PropTypes.func
};

Input.defaultProps = {};

export default Input;
