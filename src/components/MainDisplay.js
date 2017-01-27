import React, { Component } from "react";
//import DisplayItem from "./DisplayItem";
import DisplaySubItem from "./DisplaySubItem";
class MainDisplay extends Component {
  render() {
    const { item: {name,  properties } } = this.props;
    return (
      <div className="panel">
          <h4 className="panel-heading is-4 title-case">{name}</h4>
        {
          properties
            ? properties.map((prop, uid) => (
              <DisplaySubItem key={uid} item={prop} />
            ))
            : undefined
        }
      </div>
    );
  }
}
export default MainDisplay;
