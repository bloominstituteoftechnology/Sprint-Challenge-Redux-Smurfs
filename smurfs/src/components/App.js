import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'; 
import SmurfForm from './SmurfForm'; 
import {gettingSmurf} from '../actions/index'; 
import Village from './Village'; 
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount(){
    this.props.gettingSmurf(); 
  }

  render() {
    return (
      <div className="App">
       <SmurfForm />
       {this.props.error ? <h3>Error Fetching Friends</h3> : null}
      <div>
        {this.props.getSmurfs ? (
          <h1>Loading</h1>
        ): (
          <Village theSmurfs={this.props.theSmurfs} />
        )}
      </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const {smurfReducer} = state; 
  return{
    theSmurfs: smurfReducer.theSmurfs, 
    error: smurfReducer.error, 
    getSmurfs: smurfReducer.getSmurfs
  }
}

export default connect (mapStateToProps, {gettingSmurf})(App)

