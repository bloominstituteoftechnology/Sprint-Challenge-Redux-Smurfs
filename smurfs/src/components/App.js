import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs, postSmurfs } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      smurf: {
        name: '',
        age: null,
        height: ''
      }
    };
  }

  componentDidMount() {
    this.props.getSmurfs(this.state.smurfs);
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.postSmurfs(this.state.smurf)
  }


  handleChanges = e => {
    this.setState({
      smurf: {
        ...this.state.smurf,
      [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to Smurfs Village Redux!</div>
        <div>Have fun!</div>     
        <div> 
          {this.props.smurfs.map((smurf, index) => {
            return (
              <div key={index}>
                <h2></h2>  
                <h2>{smurf.name}</h2>
                <h2>{smurf.age}</h2>
                <h2>{smurf.height}</h2>
              </div>
            )
          })}
        </div>

        <form onSubmit={this.addSmurf}>
        <input 
          type='text'
          name='name'
          value={this.state.smurf.name}
          placeholder='name'
          onChange={this.handleChanges}
        />

        <input 
          type='text'
          name='age'
          value={this.state.smurf.age}
          placeholder='age'
          onChange={this.handleChanges}
        />

        <input 
          type='text'
          name='height'
          value={this.state.smurf.height}
          placeholder='height'
          onChange={this.handleChanges}
        />

        <button type="submit">Add Smurf</button>
        </form>
        <h1>{this.props.smurf}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  smurfs: state.smurfs
});

export default connect(mapStateToProps, 
  { getSmurfs, postSmurfs }
) (App);
