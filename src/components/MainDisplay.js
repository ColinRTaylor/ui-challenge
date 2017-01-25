import React, { Component } from "react";
import DisplayItem from "./DisplayItem";
import DisplaySubItem from "./DisplaySubItem";
class MainDisplay extends Component {
  render() {
    const { item: { name, properties }, item } = this.props;
    return (
      <div className="panel">
          {
            properties
              ? <h4 className="panel-heading is-4">{name}</h4>
              : <DisplayItem item={item} />
          }
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
