
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import { fetcher, beginEdit, cancelEdit, beginAdd, cancelAdd, deleter, adder, editor } from '../actions';
 import Smurfs from './smurfs.js';
 import Front from './front.js';
 import AddSmurf from './addsmurf.js';
 import { Button } from 'reactstrap';
 import './App.css';

 class App extends Component {

   componentDidMount() {
     this.props.fetcher('http://localhost:5000/api/smurfs');
   }

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
             <Smurfs smurfData={this.props.smurfs} deleteButton={this.props.deleter}
             editButton={this.props.beginEdit} addButton={this.props.beginAdd} />
           </div>
         );
       case "add":
         return (
           <div className="App mb-5">
             <AddSmurf nameText="" ageText="" emailText="" headerText="Add a smurf"
             cancelButton={this.props.cancelAdd} submitButton={this.props.adder} />
           </div>
         );
       case "edit":
         return (
           <div className="App mb-5">
             <AddSmurf smurfID={this.props.smurfs[this.props.editIndex].id} nameText={this.props.smurfs[this.props.editIndex].name}
             ageText={this.props.smurfs[this.props.editIndex].age}
             emailText={this.props.smurfs[this.props.editIndex].email}
             headerText={"Edit " + this.props.smurfs[this.props.editIndex].name}
             cancelButton={this.props.cancelEdit}
             submitButton={this.props.editor}/>
           </div>
         );
       case "error":
         return (
           <div className="App mb-5">
             {this.props.error.message}
             <Button onClick={() => this.props.fetcher('http://localhost:5000/api/smurfs')} >Reload</Button>
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
