import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions';

import SmurfForm from './SmurfForm';


class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
      {/* {this.props.error ? <h3>Error Getting The Smurfs</h3> : null} */}
        <header>
          <h1>Smurf's Village</h1>
          <SmurfForm />
        </header>
          {this.props.fetchingSmurfs ? (
            <h3>Please Hold while the smurfs get ready...</h3>
          ) : (
            <div className='smurf-list'>
              <ul>
                {this.props.smurfs.map(smurf => {
                  return    (
                      <li key = {smurf.id}> Name:{smurf.name} Age:{smurf.age}yrs Height:{smurf.height}
                      </li> 
                  );        
                })}
              </ul>
            </div>
          )}
          {this.props.error ? <h3>Error Getting The Smurfs</h3> : null}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const {smurfsReducer} = state;
  return{
   
    smurfs: smurfsReducer.smurfs,
    error: smurfsReducer.error,
    gettingSmurfs: smurfsReducer.gettingSmurfs,
  };
};
// export default App;
export default connect(
  mapStateToProps,
  {getSmurfs}
)(App);

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */


{/* <div className='smurfs-list'>

{this.props.fetching ? (<img src={logo} className='testing-logo' alt='logo'/>) :(
  <ul>
    {this.props.smurfs.map(smurf => {
      return <li key = {smurf.id}>{smurf.name}</li>;
    })}
  </ul>
)}
</div>   */}