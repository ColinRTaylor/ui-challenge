import React from "react";
import "./SidePanel.css";
import SidePanelItem from "./SidePanelItem";

const SidePanel = props => {
  const {data} = props;
  return (
    <aside className="flex-column align-center side-nav-container">
      <nav className="panel side-nav">
        <p className="panel-heading fields-header">
          Field Groups
        </p>
        {data.map((datum, index) => {
          return (
            <SidePanelItem
              handleSideItemClick={props.handleSideItemClick}
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
