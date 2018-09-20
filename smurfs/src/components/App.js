import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs,createSmurf} from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  addSmurf = event => {
    event.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    }

    this.props.createSmurf(newSmurf);
    
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        
           {this.props.smurfs.map(smurf => {
             return <div>
             <h3 key={smurf.id}>{smurf.name}</h3>
             <h4>{smurf.age}</h4>
             <h4>{smurf.height}</h4>
            </div>
            })}

          <div className="SmurfForm">
        <h1>Create Your New Smurf!</h1>

        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
        </div>
      </div>
    );
  }
}

    

const mapStateToProps = state => ({
      smurfs: state.smurfs,
      fetchingSmurfs: state.fetchingSmurfs,
      addingSmurf: state.addingSmurf 
    }) 

  export default connect(mapStateToProps,{fetchSmurfs, createSmurf})(App);
       

