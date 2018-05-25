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
import RegistedListModal from "../RegistedListModal/RegistedListModal";
import SettingModal from "../SettingModal/SettingModal";

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registedListModalOpen: false,
      settingModalOpen: false
    };
  }

  render() {
    return (
      <div className="Menus">
        <Icon>
          <PowerSettingsNew
            onClick={() => {
              this.props.electronUtil.closeApp();
            }}
          />
        </Icon>
        <Icon>
          <Refresh />
        </Icon>
        <Icon>
          <RssFeed
            onClick={() => {
              this.setState({ registedListModalOpen: true });
            }}
          />
          <RegistedListModal
            open={this.state.registedListModalOpen}
            handleClose={() => {
              this.setState({ registedListModalOpen: false });
            }}
            registedlist={[]}
          />
        </Icon>
        <Icon>
          <IndeterminateCheckBox
            onClick={() => {
              this.props.electronUtil.minimizeApp();
            }}
          />
        </Icon>
        <Icon>
          <Settings
            onClick={() => {
              this.setState({ settingModalOpen: true });
            }}
          />
          <SettingModal
            open={this.state.settingModalOpen}
            handleClose={() => {
              this.setState({ settingModalOpen: false });
            }}
            store={this.props.store}
          />
        </Icon>
        <Icon>
          <Github
            onClick={() => {
              this.props.electronUtil.openBrowser(
                "https://github.com/zonbitamago/rss-reader/blob/master/README.md"
              );
            }}
          />
        </Icon>
      </div>
    );
  }
}

Menus.propTypes = {
  electronUtil: PropTypes.object.isRequired,
  store: PropTypes.object
};

Menus.defaultProps = {};

export default Menus;
