import React, { Component } from 'react';
import PostSmurf from './PostSmurf';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount = () => {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App" style={ {maxWidth: '800px', backgroundColor: '#88ccff', margin: '0 auto'} }>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <PostSmurf />
      </div>
    );
  }
}



export default connect(null, { getSmurfs })(App);
