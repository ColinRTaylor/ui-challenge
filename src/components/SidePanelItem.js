import React, {Component} from "react";
const renderSubItems = properties => {
  return properties.map((item, index) => <span>{item.name}</span>);
};
class SidePanelItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            areSubItemsVisible: false,
        }
        this.renderSubItems = this.renderSubItems.bind(this);
    }
    renderSubItems(obj) {
        if(!obj) return;
        else {
            this.setState({
                areSubItemsVisible: !this.state.areSubItemsVisible,
            })
        }
    }
  render() {
    const containingObj = this.props.containingObj || undefined;
    const {areSubItemsVisible} = this.state;
    return (
      <div className="panel-block aside-panels">
       {containingObj && containingObj.properties.length ? 
        <a className="control" onClick={() => this.renderSubItems(containingObj)}>
            <span className="plus">+  </span>
          {this.props.name}
        </a> : 
        <a className="control" onClick={() => this.props.handleItemClick(this.props.item)} >
         {this.props.name}
        </a>
        }
        
        {areSubItemsVisible ? 
            <div className="flex-column">
                {containingObj.properties.map(prop => 
                    <a className="control" 
                       onClick={() => this.props.handleItemClick(prop)}>
                        {prop.name}
                    </a>
                )}
            </div>
            : undefined
        }
      </div>
    );
  }
}

export default SidePanelItem;
