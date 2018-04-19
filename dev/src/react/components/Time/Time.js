import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Time.css";
import moment from "moment";

class Time extends Component {
  constructor(props) {
    super(props);
    const getMMDD = () => {
      return moment().format("M/D");
    };
    const HHmmss = () => {
      return moment().format("HH:mm:ss");
    };
    this.state = {
      MMDD: getMMDD(),
      HHmmss: HHmmss()
    };
    const setTime = () => {
      this.setState({ MMDD: getMMDD(), HHmmss: HHmmss() });
    };
    setInterval(setTime, 1000);
  }

  render() {
    return (
      <div className="Time">
        <div className="Time-MMDD">{this.state.MMDD}</div>
        <div className="Time-HHmmss">{this.state.HHmmss}</div>
      </div>
    );
  }
}

Time.propTypes = {};

Time.defaultProps = {};

export default Time;
