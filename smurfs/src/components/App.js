import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';
import {getSmurfs} from '../actions/smurfActions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  render() {
    console.log('this.props', this.props);
    console.log(this.props.error);
    return (
      <div className="App">
        {this.props.loading ? <h1>Loading...</h1> : null}

        {this.props.error !== null ? <h1>{this.props.error}</h1> : null}

        {this.props.smurfs.length !== 0 
        ? this.props.smurfs.map(smurf =>{
          

          return <div className="smurfCard" key={smurf.name}>
            <h1>{smurf.name}</h1>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
          </div> 
        })
        : null}

      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,

  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
