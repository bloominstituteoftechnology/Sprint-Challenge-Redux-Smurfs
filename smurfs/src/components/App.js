
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd, deleter, adder, editor } from '../actions';
 import './App.css';
 import { Button } from 'reactstrap';

 class App extends Component {

   componentDidMount() {
     this.props.fetcher('http://localhost:3333/smurfs');
   }

  render() {
    switch (this.props.appState) {
      case "fetching":
        return (
          <div className="App mb-5">
              fetching
          </div>
        );
      case "fetched":
        return (
          <div className="App mb-5">
            fetched
          </div>
        );
      case "add":
        return (
          <div className="App mb-5">
            add
          </div>
        );
      case "edit":
        return (
          <div className="App mb-5">
            edit
          </div>
        );
      case "error":
        return (
          <div className="App mb-5">
            {this.props.error.message}
            <Button onClick={() => this.props.fetcher('http://localhost:3333/api/friends')} >Reload</Button>
          </div>
        );
      default:
        return (
          <div />
        )
    }
  }
}



const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    appState: state.appState,
    error: state.error,
    editIndex: state.editIndex
  }
}

 export default connect(mapStateToProps, {
   fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd, deleter, adder, editor
 })(App);
