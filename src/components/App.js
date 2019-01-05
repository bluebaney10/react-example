/*
import React, { Component } from 'react';
import Header from "./Header"
import Clicker from "./Clicker"
import Restapi from "./Restapi"
import ParentComponent from './ParentComponent';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Clicker/>
        <Restapi/>
        <ParentComponent/>
      </div>
      
    )
  }
}
export default App;*/

import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
        <header>Navbar</header>
        {this.props.children}
      </div>
    )
  }
}

export default App






