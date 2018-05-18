import React, { Component } from 'react';
import './App.css';
import { getS, addS, removeS } from '../actions';
import { connect } from 'react-redux';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };
  componentDidMount() {
    this.props.getS();
  }
  render() {
    return (
      <div className="App">
        <div className="Form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input"
            value={this.state.name}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="number"
            placeholder=" Age"
            name="age"
            className="input"
            value={this.state.age}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="text"
            placeholder="Height"
            name="height"
            className="input"
            value={this.state.height}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />

          <button className="button"
            onClick={() => {
              this.props.addS({ name: this.state.name, age: this.state.age, height: this.state.height });
              this.setState({ name: '', age: '', height: '' });
            }}>Add Smurf</button>




</div>
       {this.props.error !== null ? <h4>{this.props.error}</h4> : null}

          <div className="mainList">
            {this.props.smurfs.map(smurf => <li key={smurf.id} className="smurfList">
              <div className="container">
                <div className="smurfName"><h2>{smurf.name}</h2></div>
                <div className="smurfInfo">
                  <div className="age">{smurf.age}</div>
                  <div className="email">{smurf.height}</div>
                  <button className="button"
                    onClick={() => {
                      this.props.removeS(smurf.id);
                    }}>Delete</button>
                </div>
               </div>
               </li>)}
          </div>         
          
         </div>    
        
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    error: state.error
  };
};
export default connect(mapStateToProps,{ getS,addS,removeS})(App)
