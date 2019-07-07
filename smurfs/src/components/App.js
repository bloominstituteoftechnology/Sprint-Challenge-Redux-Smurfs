import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchingSmurfs } from '../actions';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    console.log(this.props);
    this.props.fetchingSmurfs();
    console.log(this.props);
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div className='Smurfs-container'>
          <p>Here are my smurfs!</p>
          {this.props.smurfs.map(smurf => {
            return(
              <div className='smurf'>
                <p>{smurf.name}</p>
                <p>{smurf.age}</p>
                <p>{smurf.height}</p>
              </div>
            );
          })}
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(mapStateToProps, { fetchingSmurfs })(App);
