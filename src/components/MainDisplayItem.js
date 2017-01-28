import React, { Component } from "react";
import { removeUnderscores } from "../utils";
import UsageIcon from './UsageIcon';
import './MainDisplay.css';
class MainDisplayItem extends Component {

  componentWillReceiveProps() {
      if(this.props.item.isActive) {
        this.scrollTo();
      }
  }
  // componentDidUpdate() {
  //   // navigate (scroll) to this item in list
  //   if(this.refs.isActive) {
      
  //   } 
  // }
  scrollTo = () => {
    this.node.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  render() {
    const { item: {name, data_type, app_keys, isActive} } = this.props;

    return (
      <div className={"card " + (isActive ? "active" : '')} ref={(node) => {this.node = node;}}>
       
    <p className="section-header title-case">
      {removeUnderscores(name)} 
    </p> 
      <div className="card-content left-panel">
        <div className="columns display-section">
          <span className="label left-section column is-one-third">Type: </span> 
          <p className="column right-section title-case"> {data_type}</p>
        </div>
        
        {app_keys.length ?
        <div className="columns display-section">
          <span className="label left-section column is-one-third">Usage: </span>
          <div className="column flex-row just-between right-section">
            {app_keys.map((val, uid) =>  (
              <p key={uid} className="inline-flex title-case"> 
                <span className={"icon " + (val.toString())}>
                  <UsageIcon/>
                </span> {removeUnderscores(val)}
              </p>)
            )}
        </div> 
        </div>: undefined}
        <div className="columns display-section">
          <span className="label left-section column is-one-third">Ever True Field Name: </span>
          <p className="column field-name"> {name}</p>
        </div>
        </div>
      </div>
    );
  }
}

export default MainDisplayItem;
