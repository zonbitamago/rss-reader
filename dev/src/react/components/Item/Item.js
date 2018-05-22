import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Item.css";
import DomainIcon from "../DomainIcon/DomainIcon";
import Divider from "@material-ui/core/Divider";
import * as timeUitl from "../../util/timeUtil";

class Item extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Item">
        <div className="container">
          <div className="left">
            <DomainIcon src={this.props.src} alt={this.props.alt} />
          </div>
          <div className="top">
            <h5 className="domainName"> {this.props.domainName}</h5>
            <h6 className="date">{timeUitl.transformDate(this.props.date)}</h6>
          </div>
          <div className="bottom">
            <a
              href="javascript:void(0);"
              onClick={() => {
                this.props.electronUtil.openBrowser(this.props.url);
              }}
            >
              {this.props.itemName}
            </a>
          </div>
        </div>
        <Divider className="divider" />
      </div>
    );
  }
}

Item.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  domainName: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  electronUtil: PropTypes.object.isRequired
};

Item.defaultProps = {};

export default Item;
