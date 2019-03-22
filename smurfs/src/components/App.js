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
      smurfs: {
        name: '',
        age: null,
        height: ''
      }
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
  };

  addSmurf = e => {
    e.preventDefault();
    this.props.postSmurfs(this.state.smurfs)
  }


  handleChanges = e => {
    this.setState({
      smurfs: {
        ...this.state.smurfs,
      [e.target.name]: e.target.value }
    });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to Smurfs Village Redux!</div>
        <div>Have fun!</div>
        <p>
          name={this.state.smurfs.name}
          age={this.state.smurfs.age}
          height={this.state.smurfs.height}
        </p>
       
        <div> 
          {this.state.smurfs.map((smurfs, index) => {
            return (
              <div>
                <h2>key={index}</h2>  
                <h2>{smurfs.name}</h2>
                <h2>{smurfs.age}</h2>
                <h2>{smurfs.height}</h2>
              </div>
            )
          })}
        </div>

        <form onSubmit={this.addSmurf}>
        <input 
          type='text'
          name='name'
          value={this.state.smurfs.name}
          placeholder='name'
          onChange={this.handleChanges}
        />

        <input 
          type='text'
          name='age'
          value={this.state.smurfs.age}
          placeholder='age'
          onChange={this.handleChanges}
        />

        <input 
          type='text'
          name='height'
          value={this.state.smurfs.height}
          placeholder='height'
          onChange={this.handleChanges}
        />

        <button type="submit">Add Smurf</button>
        </form>
        <h1>{this.props.state.smurfs}</h1>
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
