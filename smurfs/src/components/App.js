import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from '../actions/index';
import SmurfList from '../components/SmurfList';
import NewSmurf from './NewSmurf';

import styled from 'styled-components';


const AppBody = styled.div`
  text-align: center;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
`

class App extends Component {

componentDidMount() {
  this.props.getSmurfs();
}

  render() {
    return (
      <AppBody>
       <NewSmurf />
       <SmurfList {...this.props}/>
      </AppBody>
    );
  }
}

const mapToStateProps = (state) => {
  console.log(state);
  return state;
}

export default connect(mapToStateProps, {getSmurfs})(App);
