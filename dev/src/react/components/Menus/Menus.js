import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Menus.css";
import Icon from "../Icon/Icon";
import Refresh from "@material-ui/icons/Refresh";
import Home from "@material-ui/icons/Home";
import RssFeed from "@material-ui/icons/RssFeed";
import IndeterminateCheckBox from "@material-ui/icons/IndeterminateCheckBox";
import Settings from "@material-ui/icons/Settings";
import Help from "@material-ui/icons/Help";

class Menus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Menus">
        <Icon>
          <Home />
        </Icon>
        <Icon>
          <Refresh />
        </Icon>
        <Icon>
          <RssFeed />
        </Icon>
        <Icon>
          <IndeterminateCheckBox />
        </Icon>
        <Icon>
          <Settings />
        </Icon>
        <Icon>
          <Help />
        </Icon>
      </div>
    );
  }
}

Menus.propTypes = {};

Menus.defaultProps = {};

export default Menus;
