import React, { Component } from "react";
import "../node_modules/bulma/css/bulma.css";
import "./App.css";
import SidePanel from "./components/SidePanel";
import MainDisplay from "./components/MainDisplay";
class App extends Component {
  state = { data: [], itemForMain: undefined, loading: true };
  componentDidMount() {
    fetch(`/data/schema.json`)
      .then(res => res.json())
      .then(json => this.editData(json))
      .then(data => this.setState({ data, loading: false, itemForMain: data[0] }));
  }
  editData(data) {
    const groups = data.filter(group => group.containing_object)
    const generalInfo =  {
      containing_object: {
        properties: data.filter(i => !i.containing_object),
      },
      name: "General Info",
      areSubItemsVisible: true,
    };
    return [generalInfo, ...groups];
  }
  handleItemClick = item => {
    const newData = this.state.data.map(obj => {
      if(obj.containing_object.name === item.containing_object.name) {
        obj.areSubItemsVisible = !obj.areSubItemsVisible;
      } else {
        // close all others so only 1 is open at a time
        obj.areSubItemsVisible = false;
      }
      return obj;
    });
    // itemForMain: item,
    this.setState({  data: newData, itemForMain: item });
  };
  setActiveItem = item => {
    const newData = this.state.data.map(obj => {
      obj.containing_object.properties.forEach(i => {
        if(i.id === item.id)  i.isActive = true;
        else i.isActive = false
        
      })
      return obj;
    })
    this.setState({  data: newData });
  }
  addRef = item => {
    let { properties } = this.state.itemForMain;
    // copy the obj
    let obj = Object.assign({}, this.state.itemForMain);

    obj.properties = properties.map(prop => {
      // add active for the ref
      if (prop.id === item.id) {
        prop.isActive = true;
      }
      return prop;
    });
    this.setState({ itemForMain: obj });
  };
  render() {
    const { data, itemForMain, loading } = this.state;
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            Evertrue App
          </div>
        </nav>
        <div className="columns">
          {
            loading
              ? <span className="loading">Loading...</span>
              : <div className="column is-one-quarter">
                <SidePanel
                  setActiveItem={this.setActiveItem}
                  data={data}
                  handleItemClick={this.handleItemClick}
                />
              </div>
          }
          <main className="column">
            {itemForMain ? <MainDisplay item={itemForMain} /> : undefined}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
