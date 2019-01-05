/*
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';



ReactDOM.render(<App />, document.getElementById('root'));
*/
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Pages from './components/Pages'

render((
  <Router history={browserHistory}>
    <Route path='/'
           component={App}>
     <Route exact path="/" component={Home}/>
      <Route path='pages'
             component={Pages} />
    </Route>
  </Router>
), document.getElementById('app'))


