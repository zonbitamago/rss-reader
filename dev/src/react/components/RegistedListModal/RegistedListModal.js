import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./RegistedListModal.css";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Input from "../Input/Input";
import Button from "../Button/Button";
import RegistedListItem from "../RegistedListItem/RegistedListItem";

class RegistedListModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var urlList;
    if (this.props.registedlist.length > 0) {
      urlList = this.props.registedlist.map((item, idx) => {
        return <RegistedListItem key={idx} text={item.text} url={item.url} />;
      });
    }
    return (
      <div className="RegistedListModal">
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">RegistedList</DialogTitle>
          <DialogContent>
            {urlList}
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
  handleClose: PropTypes.func,
  registedlist: PropTypes.array
};

RegistedListModal.defaultProps = {};

export default RegistedListModal;
