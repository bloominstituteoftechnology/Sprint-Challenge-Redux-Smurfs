import React, { Component } from 'react';
import './App.css';

import Smurfs from './Smurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>SMURFS! 2.0 W/ Redux</h1>

        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        </header>
        {this.props.error ? <h3> Error Fetching Smurfs</h3> : null}
        <div className="Flex-Container">
          {this.props.gettingSmurfs ? (
            <img src="https://tse4.mm.bing.net/th?id=OIP.LKq9lyY23CR_jgEQ_y4TPgHaEK&w=286&h=160&c=7&o=5&pid=1.7" className="App-logo" alt="logo" />
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
          )}
        </div>
      </div>
    );
  }
}


export default App;
