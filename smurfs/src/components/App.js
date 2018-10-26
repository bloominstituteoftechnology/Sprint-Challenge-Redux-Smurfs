import React from "react";
import "./App.css";
import styled from "styled-components";
import SmurfForm from "./SmurfForm";
import SmurfDisplay from './SmurfDisplay'

const AppContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
  h1 {
    font-size: 85px;
    text-align: center;
    color: white;
    text-shadow: 3px 3px 10px blue, -3px -3px 10px blue;
    margin: 10px;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <h1>Smurf Village</h1>
      <SmurfForm></SmurfForm>
      <SmurfDisplay></SmurfDisplay>
      
    </AppContainer>
  );
};

export default App;
