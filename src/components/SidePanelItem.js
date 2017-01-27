import React, { Component } from "react";
import { removeUnderscores } from "../utils";
class SidePanelItem extends Component {
  state = { areSubItemsVisible: false };
  renderSubItems = obj => {

      this.props.handleItemClick(obj);
      //this.setState({ areSubItemsVisible: !this.state.areSubItemsVisible });
    
  };
  renderProperties = properties => {
    return (
      <div className="flex-column">
        {properties.map((prop, uid) => (
          <a
            className={"control side-panel-item " + (prop.isActive ? 'active': undefined)}
            key={uid}
            onClick={() => this.props.setActiveItem(prop)}
          >
            {removeUnderscores(prop.name)}
          </a>
        ))}
      </div>
    );
  };
  render() {
    const { item:{name,  properties , areSubItemsVisible}, item } = this.props;
    return (
      <div className="panel-block aside-panels">
        <a className={"group-header " + (areSubItemsVisible ? "active": undefined)} 
        onClick={() => this.props.handleItemClick(item)}>
              <span className="plus">{areSubItemsVisible ? "-" : "+"}</span>
              {removeUnderscores(name)}
            </a> 
        {areSubItemsVisible ? this.renderProperties(properties) : undefined}
      </div>
    );
  }
}

export default SidePanelItem;
