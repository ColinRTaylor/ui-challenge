import React, { Component } from "react";
import DisplayItem from "./DisplayItem";
import DisplaySubItem from "./DisplaySubItem";
class MainDisplay extends Component {
  render() {
    const {
      item: { name, data_type, properties, app_keys },
      item
    } = this.props;
    return (
      <div className="panel">
        <div className="panel-heading">
        {
          properties
            ?   <h4 className="is-4">{name}</h4>
        : <DisplayItem item={item} /> }
        </div>
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
