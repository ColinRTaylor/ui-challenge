import React, { Component } from "react";
import { removeUnderscores } from "../utils";
import UsageIcon from './UsageIcon';
import './MainDisplay.css';
class DisplaySubItem extends Component {
  state = {
    active: undefined,
  };
  // hasActivated = false;
  // shouldComponentUpdate () {
  //   if(this.hasActivated) return false
  //   else return true;
  // }
  componentDidUpdate() {
    // navigate (scroll) to this item in list
    if(this.refs.isActive) {
      this.refs.isActive.scrollIntoView({ behavior: "smooth", block: "end" });
      //this.hasActivated = true;
      // this.setState({active: "active"})
    } 
  }
  render() {
    const { item: {name, data_type, isActive, app_keys} } = this.props;
    return (
      <div className={"card " + (this.state.active)} ref={isActive ? "isActive": undefined}>
       
    <p className="section-header title-case">
      {removeUnderscores(name)} 
    </p> 
      <div className="card-content left-panel">
        <div className="columns display-section">
          <span className="label left-section column is-one-third" ref={isActive ? "isActive": undefined}>Type: </span> 
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

export default DisplaySubItem;
