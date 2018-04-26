import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./RegistedListModal.css";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from "material-ui/Dialog";
import Input from "../Input/Input";
import Button from "../Button/Button";

class RegistedListModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="RegistedListModal">
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">RegistedListModal</DialogTitle>
          <DialogContent>
            <Input name="Name" />
            <Input name="URL" />
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

RegistedListModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func
};

RegistedListModal.defaultProps = {};

export default RegistedListModal;
