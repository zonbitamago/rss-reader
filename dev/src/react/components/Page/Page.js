import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Page.css";
import Side from "../Side/Side";
import Header from "../Header/Header";
import Item from "../Item/Item";
import { observer } from "mobx-react";

@observer
class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var showItems = this.props.store.ItemStore.items.map((item, idx) => {
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
    return (
      <div className="Page">
        <Side electronUtil={this.props.electronUtil} store={this.props.store} />
        <Header store={this.props.store} />
        <div className="main">{showItems}</div>
      </div>
    );
  }
}

Page.propTypes = {
  electronUtil: PropTypes.object,
  items: PropTypes.array,
  store: PropTypes.object
};

Page.defaultProps = {};

export default Page;
