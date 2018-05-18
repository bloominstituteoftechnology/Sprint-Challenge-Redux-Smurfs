import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd, deleter, adder, editor } from '../actions';
import './App.css';
import { Button, Alert } from 'reactstrap';
import Smurfs from './smurfs.js';
import AddSmurf from './addsmurf.js';
import Front from './front.js';

class App extends Component {

  //Get initial data
  componentDidMount() {
    this.props.fetcher('http://localhost:3333/smurfs');
  }

  //My render is a finite state machine.  It looks at appState in its props to
  //see which state it is in.
  render() {
    switch (this.props.appState) {
      case "fetching":
        return (
          <div className="App mb-5">
              <Front />
          </div>
        );
      case "fetched":
        return (
          <div className="App mb-5">
            <Smurfs smurfData={this.props.smurfs}
            deleteButton={this.props.deleter}
            editButton={this.props.beginEdit}
            addButton={this.props.beginAdd} />
          </div>
        );
      case "add":
        return (
          <div className="App mb-5">
            <AddSmurf nameText=""
            ageText=""
            heightText=""
            headerText="Add a smurf"
            cancelButton={this.props.cancelAdd}
            submitButton={this.props.adder} />
          </div>
        );
      case "edit":
        return (
          <div className="App mb-5">
            <AddSmurf smurfID={this.props.smurfs[this.props.editIndex].id}
            nameText={this.props.smurfs[this.props.editIndex].name}
            ageText={this.props.smurfs[this.props.editIndex].age}
            heightText={this.props.smurfs[this.props.editIndex].height}
            headerText={"Edit " + this.props.smurfs[this.props.editIndex].name}
            cancelButton={this.props.cancelEdit}
            submitButton={this.props.editor}/>
          </div>
        );
      case "error":
        return (
          <div className="App error mb-5">
            <Alert color="danger">
              {this.props.error.message}
            </Alert>
            <Alert color="danger">
              {this.props.error.response.data.Error}
            </Alert>
            <div>
              <Button onClick={() => this.props.fetcher('http://localhost:3333/smurfs')} >Reload</Button>
            </div>
          </div>
        );
      default:
        return (
          <div />
        )
    }
  }
}


//make the store contents available as props
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    appState: state.appState,
    error: state.error,
    editIndex: state.editIndex
  }
}

//connect mapStateToProps and the actions with the App component
export default connect(mapStateToProps, {
  fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd, deleter, adder, editor
})(App);
