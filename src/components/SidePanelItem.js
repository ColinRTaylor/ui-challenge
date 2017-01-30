import React from "react";
import { removeUnderscores } from "../utils";

const renderProperties = (properties, clickHandler) => {
    return (
      <div className="flex-column">
        {properties.map((prop, uid) => (
          <a
            className={"control side-panel-item " + (prop.isActive ? 'active': undefined)}
            key={uid}
            onClick={() => clickHandler(prop)}
          >
            {removeUnderscores(prop.name)}
          </a>
        ))}
      </div>
    );
  }
const SidePanelItem = (props) =>  {
    const { item:{name,  properties , areSubItemsVisible}, item } = props;
    return (
      <div className="panel-block aside-panels">
        <a className={"group-header " + (areSubItemsVisible ? "active-header": undefined)} 
        onClick={() => props.handleSideItemClick(item)}>
            
              {removeUnderscores(name)}
            </a> 
        {areSubItemsVisible ? renderProperties(properties, props.setActiveItem) : undefined}
      </div>
    );
  
}

export default SidePanelItem;
