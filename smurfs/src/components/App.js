import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, getSmurfs } from '../actions';
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
    // call our action
    this.props.getSmurfs();
    console.log(this.props.smurfs);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addSmurf = event => {
    event.preventDefault();
    
    this.props.addSmurf(this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.fetchingSmurfs ? (
          <p> Fetching Smurfs.... </p>
        ): this.props.smurfs.map((smurf,index) => 
          <p key={index}>Name: {smurf.name}<br></br>Age: {smurf.age}<br></br> Height: {smurf.height}<br></br></p>
        )}

        <div className="SmurfForm">
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

const mapStateToProps = state => {
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    smurfs: state.smurfs,
  }
}
export default connect(mapStateToProps, {addSmurf, getSmurfs})(App);
