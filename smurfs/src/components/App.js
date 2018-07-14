import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getSmurfs, getSmurf } from '../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

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

  clickOnSmurf = (id) => {
    this.props.getSmurf(id);
    this.toggle();
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    
    return (
      <div className="App">
        <h1>Smurf Redux Village</h1>
        
        { this.props.smurfs.map(smurf => <SmurfDiv key={smurf.name+Math.random()} top={smurf.top} left={smurf.left}><a href="#" onClick={() => this.clickOnSmurf(smurf.id)}>{smurf.name}</a></SmurfDiv>)}
        <SmurfFinder />
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.smurf.name}</ModalHeader>
          <ModalBody>
            <p>Name:  {this.props.smurf.name}</p>   
            <p>Age: {this.props.smurf.age}</p> 
            <p>Height: {this.props.smurf.height}</p> 
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Edit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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
export default connect(MapStateToProps,{getSmurfs, getSmurf})(App);
