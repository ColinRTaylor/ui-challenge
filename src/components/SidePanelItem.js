import React, { Component } from "react";

class SidePanelItem extends Component {
  state = { areSubItemsVisible: false };
  renderSubItems = obj => {
    if (!obj) return;
    else {
      this.props.handleItemClick(obj);
      this.setState({ areSubItemsVisible: !this.state.areSubItemsVisible });
    }
  };
  render() {
    const containingObj = this.props.containingObj || undefined;
    const { areSubItemsVisible, name } = this.props.item;
    return (
      <div className="panel-block aside-panels">
        {
          containingObj && containingObj.properties.length
            ? <a
              className="control"
              onClick={() => this.renderSubItems(containingObj)}
            >
              <span className="plus">{areSubItemsVisible ? "-" : "+"}</span>
              {name}
            </a>
            : <a
              className="control"
              onClick={() => this.props.handleItemClick(this.props.item)}
            >
              {name}
            </a>
        }
        {
          containingObj && areSubItemsVisible ? <div className="flex-column">
              {containingObj.properties.map((prop, uid) => (
                <a
                  className="control"
                  key={uid}
                  onClick={() => this.props.addRef(prop)}
                >
                  {prop.name}
                </a>
              ))}
            </div> : undefined
        }
      </div>
    );
  }
}

export default SidePanelItem;
