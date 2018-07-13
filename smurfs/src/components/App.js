import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchSmurfs, toggleForm } from './../actions';
import Smurf from './Smurf';
import AddSmurf from './AddSmurf';
import Styled from 'styled-components';

const Body = Styled.div`
  background: lightblue;
`;

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs()
    console.log(this.props.smurfs);
  }

  render() {
    return (
      <Body className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          <AddSmurf />
          <ul>
          {this.props.smurfs.map(smurf => {
            return <Smurf key={smurf.id} smurf={smurf}/>
          })}
          </ul>
        </div>
      </Body>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs.smurfs
}
}

const mapActionsToProps = {
  fetchSmurfs: fetchSmurfs
}

export default connect(mapStateToProps, mapActionsToProps)(App);
