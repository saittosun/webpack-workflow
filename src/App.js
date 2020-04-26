// jshint esversion: 9
import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';

import Users from './containers/Users';
import asyncComponent from './hoc/asyncComponent';

const AsyncPizza = asyncComponent(() => {
  return import('./containers/Pizza');
})

class App extends Component {
  render() {
    return (
      <div>
        <div>
          {/* I want to reach my users and the pizza part should be lazy loaded so add just a pipe symbol and a whitespace to have some separator between the links. */}
          <Link to="/">Users</Link> | 
          <Link to="/pizza">Pizza</Link>
        </div>
        <div>
          <Route path="/" exact component={Users}/>
          {/*  I want to render another component but this one should now be lazy loaded */}
          <Route path="/pizza" component={AsyncPizza}/>
        </div>
      </div>
    )
  }
}

export default App;

