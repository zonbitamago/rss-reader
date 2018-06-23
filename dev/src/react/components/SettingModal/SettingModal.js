import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SettingModal.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { observer } from "mobx-react";

@observer
class SettingModal extends Component {
  constructor(props) {
    super(props);
    this.yesButtonClick = this.yesButtonClick.bind(this);
  }

  yesButtonClick() {
    this.props.store.ItemStore.setSetting();
    this.props.store.ItemStore.setTimer();
    this.props.handleClose();
  }

  render() {
    return (
      <div className="SettingModal">
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Settings</DialogTitle>
          <DialogContent>
            <Input
              name="UpdateDuration"
              value={this.props.store.ItemStore.updateDuration}
              changeParentVal={val => {
                this.props.store.ItemStore.updateDuration = val;
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button type="yes" handleClick={this.yesButtonClick} />
            <Button type="no" handleClick={this.props.handleClose} />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

SettingModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  store: PropTypes.object
};

SettingModal.defaultProps = {};

export default SettingModal;
