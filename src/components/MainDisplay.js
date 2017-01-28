import React from "react";
import MainDisplayItem from "./MainDisplayItem";
const MainDisplay = props => {
  const { item: { name, properties } } = props;
  return (
    <div className="panel">
      <h4 className="panel-heading title is-3 title-case">{name}</h4>
      {properties.map((prop, uid) => <MainDisplayItem key={uid} item={prop} />)}
    </div>
  );
};
export default MainDisplay;
