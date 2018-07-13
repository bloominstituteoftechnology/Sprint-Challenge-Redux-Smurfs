import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getData } from '../actions/index' ;

import SmurfList from './SmurfList' ;
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  //below initiates redux server call
  componentDidMount() {
    this.props.getData() ;
  }

  render() {
    return (      
      <div className="App">
        <header>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>
            Welcome to your Redux version of Smurfs!
          </div>
{/*  
{console.log("HERE", this.props.smurfs[0])}  

        {this.props.smurfs.map((smurf, index) => {
          return (
            <div key={index}>{smurf.name}</div>
          )
        })} 
*/}
        </header>
        <div>
          <SmurfList {...this.props}/>
        </div>
      </div>
      

    );
  }
}

//export default App;

const mapStateToProps = state => {
  //console.log('My State, from App.js', state)
  return state ;
}
export default connect(mapStateToProps, { getData })(App) ;