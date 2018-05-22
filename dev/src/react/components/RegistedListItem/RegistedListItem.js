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
  }

  render() {
    return (
      <div className="RegistedListItem">
        <ListItem component="a" href={this.props.url}>
          <ListItemText
            className="RegistedListItem-Text"
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

RegistedListItem.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

RegistedListItem.defaultProps = {};

export default RegistedListItem;
