import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SettingModal.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../Input/Input";
import Button from "../Button/Button";

class SettingModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="SettingModal">
        {" "}
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Settings</DialogTitle>
          <DialogContent>
            <Input name="Update Duration" />
          </DialogContent>
          <DialogActions>
            <Button type="yes" handleClick={this.props.handleClose} />
            <Button type="no" handleClick={this.props.handleClose} />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SettingModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
};

SettingModal.defaultProps = {};

export default SettingModal;
