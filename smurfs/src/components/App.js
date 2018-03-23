import React from 'react';

import SmurfsList from './SmurfsList';
import AddSmurf from './AddSmurf';
import './App.css';

const App = () => {
    return (
      <React.Fragment>
        <AddSmurf />
        <SmurfsList />
      </React.Fragment>
    );
  }; // end App component

export default App;
