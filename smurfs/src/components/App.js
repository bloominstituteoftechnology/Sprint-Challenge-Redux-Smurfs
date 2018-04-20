import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSmurfs, createSmurfs } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    smurf: '',
    name: '',
    age: '',
    height: ''
  };

  componentDidMount() {
    this.props.fetchSmurfs();
  }
  
  handleNewSmurf(e) {
    this.setState({ [e.tartget.name]: e.target.value });
  }

  render() {
    console.log("What does this do?");
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>

          <form>
            <input
              type="text"
              name='name'
              placeholder='Smurf Name'
              onChange={this.props.handleNewSmurf}
            />
             <input
              type="text"
              name='age'
              placeholder='Smurf Age'
              onChange={this.props.handleNewSmurf}
              />
            <input
              type="text"
              name='height'
              placeholder='Smurf Height'
              onChange={this.props.handleNewSmurf}
            />           
            <button
              type='button'
              onClick={() => {
                this.props.createSmurfs(this.props.smurf);
                this.setState({ smurf: '' });
              }}
              > CrEaTe SmUrF </button>
          </form>
    

          <div>
            {this.props.smurfs.map((smurf, index) => {
              return [
                <div key={'My' + index}> { smurf } </div>
              ];
            })}
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurfs, createSmurfs })(App);