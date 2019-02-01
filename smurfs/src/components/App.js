import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Home from '../components/Home'
import Edit from '../components/Edit'

class App extends Component {
  render() {


    return (
      <div>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/smurfs/edit/:id' component={Edit}></Route>
      </div>
    );
  }
}

export default App;