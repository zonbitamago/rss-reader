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
import { observer } from "mobx-react";

@observer
class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registedListModalOpen: false,
      settingModalOpen: false
    };
  }

  render() {
    var loadingClassName = this.props.store.ItemStore.loading ? "loading" : "";
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
          <Refresh
            className={loadingClassName}
            onClick={() => {
              this.props.store.ItemStore.add();
            }}
          />
        </Icon>
        <Icon>
          <RssFeed
            onClick={() => {
              this.props.store.RssListStore.getRssList();
              this.setState({ registedListModalOpen: true });
            }}
          />
          <RegistedListModal
            open={this.state.registedListModalOpen}
            handleClose={() => {
              this.setState({ registedListModalOpen: false });
            }}
            store={this.props.store}
            electronUtil={this.props.electronUtil}
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
              this.props.store.ItemStore.getSettings();
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
