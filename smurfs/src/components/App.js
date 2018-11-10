import React from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';

import SmurfList from './SmurfList';
import AddSmurfForm from './AddSmurfForm'

import '../index.css';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const App = props => {
  return (
    <div>
      <div className="app-container">
          <div className="nav-bar">
            <div className="site-name">
              <h1>Smurfs 2.0!</h1>
            </div>
            <div className="links">
              <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
              <Link to='/add' style={{ textDecoration: 'none' }}>Add New Smurf</Link>
            </div>
          </div>
        </div>
        <Route path='/add' component={AddSmurfForm} />
        <SmurfList />
    </div>
  );
}

export default App;
