import React from 'react';

import SmurfsList from './SmurfsList';
import AddSmurf from './AddSmurf';
import './App.css';

const App = () => {
    return (
      <React.Fragment>
        <h1>Smurf List Fa la la...</h1>
        <AddSmurf />
        <SmurfsList />
      </React.Fragment>
    );
  }; // end App component

export default App;
