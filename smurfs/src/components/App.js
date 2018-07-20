import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSmurfs, getSmurf, putSmurf } from '../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const ModalSpan = styled.span`
  border: 1px solid grey;
`
const SmurfDiv = styled.div`
  background:#fff;
  position:absolute;
  opacity:.6; /* manipulate to desired opacity */
  height:20%;
  width:10%;
  opacity:0;
  &:hover{
    opacity:.6;
  }
  
  /* Custom for each smurf*/
  top: ${props => props.top};
  left: ${props => props.left};
`

const SmurfFinder = styled.div`
  background:#fff;
  position:absolute;
  opacity:.6; /* manipulate to desired opacity */
  height:20%;
  width:10%;
  opacity:.6;
  display:none;

  /* Custom for each smurf*/
  top: 40%;
  left: 40%;
`


class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      modal: false
    }
  }

  componentDidMount(){
    this.props.getSmurfs();
  }

  clickOnSmurf = (id) => {
    this.props.getSmurf(id);
    this.toggle();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  nameEdited = (e,id) => {
    //Filter the smurfs array looking for the id that came in from the onInput Handler
    let editedSmurf = this.props.smurfs.filter( smurf => smurf.id === id)[0]
    
    //Set the name of what was typed by the user
    editedSmurf.name = e.target.innerHTML.trim();

    //Create a new object, with only the name, age, and height for the server PUT call
    let newEditedSmurf = Object.assign({}, {name:editedSmurf.name}, {age:editedSmurf.age}, {height:editedSmurf.height})
    this.props.putSmurf(id,newEditedSmurf);
  }

  render() {
    
    return (
      <div className="App">
        <h1>Smurf Redux Village</h1>
        
        { this.props.smurfs.map(smurf => <SmurfDiv key={smurf.name+Math.random()} top={smurf.top} left={smurf.left}><a href="#" onClick={() => this.clickOnSmurf(smurf.id)}>{smurf.name}</a></SmurfDiv>)}
        <SmurfFinder />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Please correct any data you think is wrong</ModalHeader>
          <ModalBody>
            <p> <label htmlFor="name">Name:   </label> <ModalSpan onInput={(e) => this.nameEdited(e, this.props.smurf.id)}   contentEditable="true" id="name">  {this.props.smurf.name}   </ModalSpan> </p>   
            <p> <label htmlFor="age"> Age:    </label> <ModalSpan onInput={(e) => this.ageEdited(e, this.props.smurf.id)}    contentEditable="true" id="age">   {this.props.smurf.age}    </ModalSpan> </p> 
            <p> <label htmlFor="name">Height: </label> <ModalSpan onInput={(e) => this.heightEdited(e, this.props.smurf.id)} contentEditable="true" id="height">{this.props.smurf.height} </ModalSpan> </p> 
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>Save Changes</Button> */}
            <Button color="secondary" onClick={this.toggle}>Done</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


const MapStateToProps = (state) =>{
  return {
    smurfs: state.smurfs,
    fetching:state.fetching,
    smurf : state.smurf,
  }
}
export default connect(MapStateToProps,{getSmurfs, getSmurf, putSmurf})(App);
