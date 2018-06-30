import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./RegistedListItem.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import Delete from "@material-ui/icons/Delete";

class RegistedListItem extends Component {
  constructor(props) {
    super(props);
    this.deleteClick = this.deleteClick.bind(this);
  }

  deleteClick() {
    this.props.store.FeedListSotre.deleteFeedList(this.props.name);
    this.props.store.ItemStore.setTimer();
  }

  render() {
    return (
      <div className="RegistedListItem">
        <ListItem component="a">
          <ListItemText
            className="RegistedListItem-Text"
            primary={this.props.name}
            onClick={this.props.electronUtil.openBrowser.bind(
              this,
              this.props.url
            )}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <Delete onClick={this.deleteClick} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }
}

RegistedListItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  store: PropTypes.object,
  electronUtil: PropTypes.object.isRequired
};

RegistedListItem.defaultProps = {};

export default RegistedListItem;
