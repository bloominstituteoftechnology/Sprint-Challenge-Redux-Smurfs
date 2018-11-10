import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import SmurfList from './SmurfList';
import Home from './Home';
import AddSmurf from './AddSmurf';
import SmurfProfile from './SmurfProfile';
import UpdateSmurf from './UpdateSmurf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/smurfs">The Village</Link>
          <Link to="/create">Add a Smurf</Link>
        </nav>

        <Route path="/create" render={ props => <div><AddSmurf/> <SmurfList /></div>} />
        <Route exact path="/" component={Home} />
        <Route exact path="/smurfs" component={SmurfList} />
        <Route path="/smurfs/:id" render={ props => <SmurfProfile {...props} /> } />
        <Route path="/smurfs/:id/update" component={UpdateSmurf} />

      </div>
    );
  }
}

export default App;
