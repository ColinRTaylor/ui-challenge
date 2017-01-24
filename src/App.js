import React, { Component } from 'react';
import './App.css';
import '../node_modules/bulma/css/bulma.css'; 
import SidePanel from './components/SidePanel';
class App extends Component {
  constructor() {
    super();
    this.state = {
        data: [],
    }
  }
    componentWillMount() {
        fetch(`/data/schema.json`)
            .then(res => res.json())
            .then(data => this.setState({ data }));
    }
    handleItemClick(item) {
        console.log('item is ' + JSON.stringify(item))
    }
  render() {
    const {data} = this.state;
    return (
      <div>
      <nav className="nav">
  <div className="nav-left"> 
    App
  </div> 
  </nav>
      <div className="columns">
        <div className="column is-one-quarter">
          {data.length ? 
            <SidePanel data={data}
                handleItemClick={this.handleItemClick}
             /> 
            : <span>Loading...</span>}
        </div>
        <main className="column">
            <h1>main</h1>
        </main>
      </div>
      </div>
    );
  }
}

export default App;
