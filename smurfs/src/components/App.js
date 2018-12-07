import React, { Component } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import HomeView from '../views/HomeView';
import FormView from '../views/FormView';
/*
  to wire this component up you're going to need a few things.
  I'll let you do this part on your own. 
  Just remember, `how do I `connect` my components to redux?`
  `How do I ensure that my component links the state to props?`
 */
/***************************************************************************************************
 ********************************************* Variables *******************************************
 **************************************************************************************************/
export const urlLinks = {
  server: 'http://localhost:3333',
  home: '/',
  smurfs: 'smurfs',
  smurfForm: 'form'
};

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  text-align: center;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class App extends Component {
  render() {
    return (
      <DivWrapper>
        <Route
          exact
          path={urlLinks.home}
          render={props => <HomeView {...props} />}
        />
        <Route
          exact
          path={`${urlLinks.home}${urlLinks.smurfForm}`}
          render={props => <FormView {...props} />}
        />
      </DivWrapper>
    );
  }
}

export default App;
