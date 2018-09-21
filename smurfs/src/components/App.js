import React, { Component } from 'react';
import './App.css';
import {getSmurfs} from '../actions';
import {connect} from 'react-redux';
import SmurfList from '../components/SmurfList';
import AddSmurfForm from './AddSmurfForm';
import {Route, Link} from 'react-router-dom';
import {withRouter} from 'react-router';


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/newSmurf" component={AddSmurfForm} />
        <Link to="/newSmurf">Add New Smurf</Link>
        <Route exact path="/" render={() => <SmurfList smurfs={this.props.smurfs} />} />
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}

export default withRouter(connect(mapStateToProps, {getSmurfs})(App));
