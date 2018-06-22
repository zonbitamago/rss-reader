import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Header.css";
import Icon from "../Icon/Icon";
import Home from "@material-ui/icons/Home";
import RssFeed from "@material-ui/icons/RssFeed";
import Twitter from "react-icons/lib/ti/social-twitter";
import Typography from "@material-ui/core/Typography";
import $ from "jquery";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-Left">
          <Icon>
            <Home
              onClick={() => {
                $(".main").animate({ scrollTop: 0 });
              }}
            />
          </Icon>
        </div>
        <div className="Header-Center">
          <Icon>
            <RssFeed />
          </Icon>
          <Typography color="inherit" variant="subheading">
            +
          </Typography>
          <Icon>
            <Twitter />
          </Icon>
          <Typography color="inherit" variant="subheading">
            Feed
          </Typography>
        </div>
        <div className="Header-Right">
          <div>update : {this.props.store.ItemStore.updateDate}</div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
