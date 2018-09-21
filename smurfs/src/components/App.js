import React, { Component } from 'react';
import { get, removeSmurf } from '../actions';
import { connect } from 'react-redux';
import SmurfForm from './SmurfForm';
import styled from 'styled-components';
import './App.css';

const Smurfs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 800px;
  margin: 2% auto;
  z-index: 1;
`;

const SmurfCard = styled.div`
  box-sizing: border-box;
  background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
  height: 200px;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2% 0;
  margin: 3%;
  z-index: 1;
  color: rgb(240, 236, 229);
  border-radius: 5px 10px;
  position: relative;
  font-size: 30px;

  p {
    margin: 0;
  }

  button {
    width: 70px;
    text-align: center;
    height: 20px;
    align-self: center;
    border-radius: 5px;
    border: none;
    font-family: Acme;
    box-shadow: 0 4px 8px 0 inset rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;

class App extends Component {
  componentDidMount() {
    this.props.get();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to our Village!</h1>
        <div>We hope you enjoy your stay!</div>

        <div className="page">
          <SmurfForm />
          <Smurfs>
            {this.props.smurfs.map(smurf => (
              <SmurfCard>
                <p>{smurf.name}</p>
                <p>Age: {smurf.age}</p>
                {console.log(smurf.id)}
                <p>Height: {smurf.height}</p>
                <button onClick={() => this.props.removeSmurf(smurf.id)}>
                  Goodbye!
                </button>
              </SmurfCard>
            ))}
          </Smurfs>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    loading: state.loading
  };
};

export default connect(
  mapStateToProps,
  { get, removeSmurf }
)(App);
