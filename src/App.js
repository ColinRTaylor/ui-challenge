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
      ).catch(err => alert(err));
  }
  initData(data) {
    const initialValue = [
      { name: "General Info", areSubItemsVisible: true, properties: [] }
    ];
    const groups = data.reduce(
      (accum, group,) => {
        if (group.hasOwnProperty("containing_object")) {
          // create ref to clean up data
          group.properties = group.containing_object.properties;
          return accum.concat(group);
        } else {
          //accum[0].properties.concat(group)
          accum[0].properties.push(group);
          return accum;
        }
      },
      initialValue
    );
    //  [
    //   {name: "General Info",
    //   areSubItemsVisible: true, properties:[]}
    // ]
    // console.log(groups)
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
    const newData = this.state.data.map(obj => {
      if (obj.name === item.name) {
        obj.areSubItemsVisible = !obj.areSubItemsVisible;
      } else {
        // close all others so only 1 is open at a time
        obj.areSubItemsVisible = false;
      }
      return obj;
    });
    // itemForMain: item,
    this.setState({ data: newData, itemForMain: item });
  };
  setActiveItem = item => {
    //const { containing_object } = this.state.itemForMain;
    const newProps = this.state.itemForMain.properties.map(obj => {
      if (obj.id === item.id) obj.isActive = true;
      else obj.isActive = false;
      return obj;
    });
    this.setState({
      itemForMain: Object.assign(
        { properties: newProps },
        this.state.itemForMain
      )
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
