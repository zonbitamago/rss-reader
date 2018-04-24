import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./RssListItem.css";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "material-ui/List";
import IconButton from "material-ui/IconButton";
import Delete from "@material-ui/icons/Delete";

class RssListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="RssListItem">
        <ListItem component="a" href={this.props.url}>
          <ListItemText
            className="RssListItem-Text"
            primary={this.props.text}
          />
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete">
              <Delete />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }
}

RssListItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

RssListItem.defaultProps = {};

export default RssListItem;
