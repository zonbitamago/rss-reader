import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Page.css";
import Side from "../Side/Side";
import Header from "../Header/Header";
import Item from "../Item/Item";

class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var showItems;
    if (Array.isArray(this.props.items)) {
      showItems = this.props.items.map((item, idx) => {
        return (
          <Item
            key={idx}
            src={item.src}
            domainName={item.domainName}
            url={item.url}
            itemName={item.itemName}
            date={item.date}
            electronUtil={this.props.electronUtil}
          />
        );
      });
    }
    return (
      <div className="Page">
        <Side electronUtil={this.props.electronUtil} />
        <Header />
        <div className="main">{showItems}</div>
      </div>
    );
  }
}

Page.propTypes = { electronUtil: PropTypes.object, items: PropTypes.array };

Page.defaultProps = {};

export default Page;
