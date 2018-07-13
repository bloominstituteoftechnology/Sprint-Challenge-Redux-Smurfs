import React from 'react';

import SmurfList from './SmurfList';
import AddSmurfForm from './AddSmurfForm';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your Redux version of Smurfs!</div>
      <AddSmurfForm />
      <SmurfList />
    </div>
  )
}


export default App;
