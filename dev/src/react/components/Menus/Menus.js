import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Menus.css";
import Icon from "../Icon/Icon";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import Refresh from "@material-ui/icons/Refresh";
import RssFeed from "@material-ui/icons/RssFeed";
import IndeterminateCheckBox from "@material-ui/icons/IndeterminateCheckBox";
import Settings from "@material-ui/icons/Settings";
import Github from "react-icons/lib/go/mark-github";

class Menus extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Menus">
        <Icon>
          <PowerSettingsNew />
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
          <Github />
        </Icon>
      </div>
    );
  }
}

Menus.propTypes = {};

Menus.defaultProps = {};

export default Menus;
