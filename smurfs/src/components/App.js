import React from "react";
import styled from "styled-components";
import SmurfForm from "./SmurfForm";
import SmurfDisplay from "./SmurfDisplay";

const AppContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  box-sizing: border-box;
  h1 {
    font-size: 85px;
    text-align: center;
    color: white;
    text-shadow: 5px 5px 20px blue, -5px -5px 20px blue;
    margin: 10px;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <h1>Smurf Village</h1>
      <SmurfForm />
      <SmurfDisplay />
    </AppContainer>
  );
};

export default App;
