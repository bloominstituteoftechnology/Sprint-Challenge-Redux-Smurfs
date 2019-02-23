import React, { Component } from 'react';
import {getSmurfs} from './../actions/index'
// import {smurfReducer} from './../reducers/index'
import { connect } from 'react-redux';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title">{`Smurfaholics`}</h1>
        </header>
        {this.props.error ? <h3>Error Fetching Smurfs</h3> : null}
        <div className="Flex-Container">
          {this.props.gettingSmurfs ? (
            <h3>Hunting Smurfs</h3>
          ) : (
            this.props.name
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { smurfReducer } = state;
  return {
    smurfs: smurfReducer.smurfs,
    error: smurfReducer.error,
    gettingSmurfs: smurfReducer.gettingSmurfs
  };
};
export default connect(mapStateToProps, { getSmurfs })(App);