import React, { Component } from "react";

import MainDisplayItem from "./MainDisplayItem";
class MainDisplay extends Component {
  render() {
    const { item: {name,  properties } } = this.props;
    return (
      <div className="panel">
          <h4 className="panel-heading title is-3 title-case">{name}</h4>
        {
          properties
            ? properties.map((prop, uid) => (
              <MainDisplayItem key={uid} item={prop} />
            ))
            : undefined
        }
      </div>
    );
  }
}
export default MainDisplay;
