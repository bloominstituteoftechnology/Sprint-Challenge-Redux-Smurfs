// import React, { Component } from 'react';
// import './App.css';
// import Smurfs from './Smurfs';
// import List from './List';
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
//         <Smurfs />
//         <List />
//       </div>
//     );
//   }
// }

// export default App;

import React from 'react';
import ConnectedSmurfs from './Smurfs'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/receivedata'

class App extends React.Component {
  componentDidMount () {
    const { dispatch } = this.props;

    dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;

    if (loading === true) {
      return <h3>Loading</h3>
    }

    return (
      <div>
        <ConnectedSmurfs />
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App);