import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SettingModal.css";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from "material-ui/Dialog";
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
          aria-labelledby="form-dialog-title">
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
