import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import {getSmurfs, addSmurf, updateSmurf, deleteSmurf} from '../actions';
import './App.css';



class App extends Component {

  componentDidMount () {
    this.props.getSmurfs(); 
  }


  render() {
    const smurfs = this.props.smurfs; 
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <input type="text" placeholder="...name" ref ={input => this.name = input}/>
        <input type="text" placeholder="...age" ref ={input => this.age = input}/>
        <input type="text" placeholder ="...height" ref ={input => this.height = input}/>
        <button>Add Smurf</button>
        <br/>
        <br/>
        <br/>
        <br/>
        {smurfs.map((smurf, i )=> 
        <div key ={i} className = 'scene'>
          <div className ="card">
            <div className="card__face card__face--front">
            {smurf.name}
            </div> 
            <div className="card__face card__face--back">
              <h1>{smurf.name}</h1>
              <br/>
              <h1>{smurf.age}</h1>
              <br/>
              <h1>{smurf.height}</h1>
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state) // for now delete later.. 
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error,
  }
}



export default connect(mapStateToProps, {getSmurfs,addSmurf, updateSmurf,deleteSmurf})(App);
