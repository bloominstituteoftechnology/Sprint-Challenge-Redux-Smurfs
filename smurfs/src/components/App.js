import React, { Component } from 'react';
import './App.css';
import SmurfsForm from './SmurfsForm';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
import Smurfs from './Smurfs';
import rootReducer from '../reducers';

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

  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <h1 className="App-Title">{`Smurfs`}</h1>
  //         <SmurfsForm />
  //       </header>
  //       {this.props.error ? <h3>Error Getting Smurfs</h3> : null}
  //       <div className="Flex-Container">
  //         {this.props.fetchingSmurfs ? (
  //           <img src={logo} className="App-logo" alt="logo" />
  //         ) : (
  //           <Smurfs smurfs={this.props.smurfs} />
  //         )}
  //       </div>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div>
        <SmurfsForm />
        {this.props.smurfs.map(smurf => { return <Smurfs key={smurf.id} smurf={smurf}/>})}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const { smurfsReducer } = state;
  return {
    fetchingSmurf: state.fetchingSmurf,
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect( mapStateToProps, {getSmurfs})(App);
