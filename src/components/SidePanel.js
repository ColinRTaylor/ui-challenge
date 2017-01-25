import React from "react";
import "./SidePanel.css";
import SidePanelItem from "./SidePanelItem";

const SidePanel = props => {
  const names = props.data.filter(datum => datum.name);
  return (
    <aside>
      <nav className="panel">
        <p className="panel-heading fields-header">
          Field Groups
        </p>
        {names.map((datum, index) => {
          const containingObj = datum.containing_object || undefined;
          return (
            <SidePanelItem
              containingObj={containingObj}
              handleItemClick={props.handleItemClick}
              addRef={props.addRef}
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
