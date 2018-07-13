import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurfs from './Smurfs';
import AddSmurfForm from './AddSmurfForm';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        {
          this.props.error ? <div>Error</div> : null
        }
        {
          this.props.fetching ? <div>FETCHING_SMURFS</div>
            :
            <React.Fragment>

              <AddSmurfForm />
              <Smurfs smurfs={this.props.smurfs} />

            </React.Fragment>
        }

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetchingSmurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, { getSmurfs })(App);
