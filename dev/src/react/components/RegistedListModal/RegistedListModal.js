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
import { observer } from "mobx-react";

@observer
class RegistedListModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      error: false
    };

    this.yesButtonClick = this.yesButtonClick.bind(this);
  }

  yesButtonClick() {
    var promise = this.props.store.RssListStore.setRssList();
    promise
      .then(ret => {
        if (ret) {
          this.setState({ success: true });
        } else {
          this.setState({ error: true });
        }
      })
      .catch(() => {
        this.setState({ error: true });
      });
    // this.props.handleClose();
  }

  render() {
    var urlList;
    if (this.props.store.RssListStore.rssList.length > 0) {
      urlList = this.props.store.RssListStore.rssList.map((item, idx) => {
        return (
          <RegistedListItem
            key={idx}
            name={item.name}
            url={item.url}
            store={this.props.store}
            electronUtil={this.props.electronUtil}
          />
        );
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
            <Input
              name="Name"
              value={this.props.store.RssListStore.name}
              changeParentVal={val => {
                this.props.store.RssListStore.name = val;
              }}
            />
            <Input
              name="URL"
              value={this.props.store.RssListStore.url}
              changeParentVal={val => {
                this.props.store.RssListStore.url = val;
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

RegistedListModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  store: PropTypes.object,
  electronUtil: PropTypes.object.isRequired
};

RegistedListModal.defaultProps = {};

export default RegistedListModal;
