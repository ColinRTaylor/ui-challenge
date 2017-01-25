import React, { Component } from "react";

class DisplaySubItem extends Component {
  componentDidUpdate() {
    // navigate (scroll) to this item in list
    if (this.refs.isActive)
      this.refs.isActive.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    const { item } = this.props;
    return (
      <div className="panel-block flex-column aside-panels">
        <div className="inline-flex">
          {
            item.isActive ? <span className="label" ref="isActive">
                Ever True Field Name:
              </span> : <span className="label">Ever True Field Name: </span>
          }
          <p> {item.name}</p>
        </div>
        <div className="inline-flex">
          <span className="label">Type: </span> <p> {item.data_type}</p>
        </div>
        <div className="inline-flex">
          <span className="label">Usage: </span>
          <div>
            {item.app_keys.map((key, uid) => <p key={uid}> {key}</p>)}
          </div>
        </div>
      </div>
    );
  }
}

export default DisplaySubItem;
