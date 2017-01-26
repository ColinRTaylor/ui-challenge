import React from "react";
import "./SidePanel.css";
import SidePanelItem from "./SidePanelItem";

const SidePanel = props => {
  const {data} = props;
  // TODO: move this 
  // const names = data.filter(datum => datum.name);
  return (
    <aside>
      <nav className="panel">
        <p className="panel-heading fields-header">
          Field Groups
        </p>
        {data.map((datum, index) => {
          return (
            <SidePanelItem
              handleItemClick={props.handleItemClick}
              setActiveItem={props.setActiveItem}
              key={index}
              item={datum}
            />
          );
        })}
      </nav>
    </aside>
  );
};

export default SidePanel;
