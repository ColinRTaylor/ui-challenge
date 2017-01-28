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
      .then(json => this.initData(json))
      .then(
        data => this.setState({ data, loading: false, itemForMain: data[0] })
      ).catch(err => console.error(err));
  }
  initData(data) {
    const initialValue = [
      { name: "General Info", areSubItemsVisible: true, properties: [] }
    ];
    const groups = data.reduce(
      (accum, group,) => {
        if (group.hasOwnProperty("containing_object")) {
          // create reference to normalize up data
          group.properties = group.containing_object.properties;
          return accum.concat(group);
        } else {
          accum[0].properties = accum[0].properties.concat(group);
          return accum;
        }
      },
      initialValue
    );
    return groups;
    // const groups = data.filter(group => {
    //   if(group.hasOwnProperty('containing_object')) {
    //     group.properties = group.containing_object.properties;
    //     return group
    //   }
    // });
    // const generalInfo = {
    //   containing_object: { properties: data.filter(i => !i.containing_object) },
    //   properties: data.filter(i => !i.containing_object),
    //   name: "General Info",
    //   areSubItemsVisible: true
    // };
    // return [ generalInfo, ...groups ];
  }
  handleItemClick = item => {
    // doing at data level so can only have 1 open at a time
    const newData = this.state.data.map(datum => {
      // prevent unwanted scrolling
      datum.properties.forEach(prop => {
        prop.isActive = false;
      })
      if (datum.name === item.name) {
        datum.areSubItemsVisible = !datum.areSubItemsVisible;
      } else {
        // close all others so only 1 is open at a time
        datum.areSubItemsVisible = false;
      }
      return datum;
    });
    this.setState({ data: newData, itemForMain: item });
  };
  setActiveItem = item => {
    const {properties } = this.state.itemForMain;
    const newProps = properties.map(obj => {
      if (obj.id === item.id) obj.isActive = true;
      else obj.isActive = false;
      return obj;
    });
    this.setState({
      itemForMain: Object.assign(
        { properties: newProps },
        this.state.itemForMain
      ),
    });
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
