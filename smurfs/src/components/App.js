import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions';
import AddSmurf from './AddSmurf';
import Smurf from './Smurf';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    }
  }

  componentDidMount() {
    this.props.fetchSmurfs()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the REDUX version of Smurf Village!</h1>
        </header>
        {this.state.showForm ? (
            <AddSmurf/>
          ) : (
            <button 
              className="show btn"
              onClick={() => {this.setState({showForm:true})}}>
              Add a new Smurf
            </button>
          )}
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    fetched: state.fetched
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
