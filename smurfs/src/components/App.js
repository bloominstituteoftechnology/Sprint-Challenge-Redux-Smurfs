import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { connect } from 'react-redux';
import 

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      smurfList : []
    }
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <smurfList list={this.state.smurfList} />

      </div>
    );
  }

  componentDidMount(){
  axios
    .get(`http://localhost:3333`)
      .then(data => {
        setState({smurfList: data})
      })
    .catch(error => {
      console.log('does not work')
    })
    }
}

  const mapStateToProps = (state) => {
    return {
      smurf: state
    };
  }

  export default App;
//export default connect(mapStateToProps, { addSmurf})(App);
