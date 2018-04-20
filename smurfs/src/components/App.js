import React, { Component } from 'react';
import './App.css';
import { addSmurf } from '../actions';
import SmurfsList from './smurfsList';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      SmurfText: '',
    }
  }

  render() {
    return (
      <div className="App">
        const App = () => (
          <div>
            <addSmurf/>
            <SmurfsList />
          </div>
        )
      </div>
    );
  }
}

export default App;
