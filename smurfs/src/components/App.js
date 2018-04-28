import React, { Component } from 'react';
import './App.css';
import { getSmurfs, addSmurf } from '../actions'
import { connect } from 'react-redux';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: 0
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  updateInput = e => {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
  }

  createSmurf = e => {
    // e.preventDefault();
    const newSmurf = { name: this.state.name,
                        age: this.state.age,
                        height: this.state.height };
    this.props.addSmurf(newSmurf);
    this.setState({ name: '', age: '', height: '' });
  }

  render() {
    return (
      <div className="App">
        <h1>Smurfs</h1>
       
          <ul>
            {this.props.smurfs.map((smurf, index) => {
              return <li key={ smurf.id }>{ smurf.name}</li>
            })}
          </ul>
        
        <form>
          <input type='text' name='name' placeholder='name' onChange={this.updateInput} value={this.state.name} />
          <input type='number' name='age' placeholder='age' onChange={ this.updateInput } value={ this.state.age } />
          <input type='number' name='height' placeholder='height' onChange={ this.updateInput } value={ this.state.height } />
          <button onClick={this.createSmurf}>New Smurf</button>
        </form>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    pending: state.pending
  };
};

export default connect(mapStateToProps, { getSmurfs, addSmurf })(App);
