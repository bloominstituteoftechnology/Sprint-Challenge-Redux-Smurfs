import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurf from './Smurf';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              smurf={smurf}
              key={smurf.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ smurfs, isFetching, err }) => {
  return { smurfs, isFetching, err };
};

export default connect(mapStateToProps, { getSmurfs })(App);
