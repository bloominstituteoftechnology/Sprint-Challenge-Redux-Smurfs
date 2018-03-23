// import React, { Component } from 'react';
// import './App.css';
// /*
//  to wire this component up you're going to need a few things.
//  I'll let you do this part on your own. 
//  Just remember, `how do I connect my components to redux?`
//  `How do I ensure that my component links the state to props?`
//  */
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your Redux version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { connect } from 'react-redux';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

import { getFriends } from '../actions';
class App extends Component {
  
  componentDidMount() {
    this.props.getFriends();
  }

  render() {
    return (
      <div className="App">
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     // fetching: state.fetching,
//     // friends: state.friends,
//     // error: state.errorMessage,
//   };
// };

export default connect(null, { getFriends })(App);