import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import HomeView from './views/HomeView';
import SmurfsListView from './views/SmurfListView';
import SmurfFormView from './views/SmurfFormView';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className='nav'>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/smurfs'>
                Village
            </NavLink>
          </li>
          <li>
            <NavLink to='/smurfs-form'>
                Welcome New Smurf
            </NavLink>
          </li>
        </ul>
        <Route exact path='/' component={HomeView} />
        <Route exact path='/smurfs' component={SmurfsListView} />
        <Route path='/smurfs-form' component={SmurfFormView} />
      </div>
    );
  }
}

export default withRouter(App);
