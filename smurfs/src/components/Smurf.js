import React from 'react';
import { connect } from 'react-redux';
import { editSmurf, editToggle } from '../actions';

class Smurf extends React.Component {
	
	state = {
		name: this.props.smurf.name,
		age: this.props.smurf.age,
		height: this.props.smurf.height,
		editing: this.props.smurf.editing,
		id: this.props.id
	}

	  handleChange = (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }

    addEditSmurf = ()=>{

    this.props.editSmurf(this.state);
  }

  handleEdit = (id) => {
  	this.props.editToggle(id);
  }


  renderHelper = ()=>{
  	const smurf = this.props.smurf;
      if(smurf.editing){
        return(
        	<div>
            <div><input onChange={this.handleChange} name="name" value={this.state.name} /></div>
            <div><input onChange={this.handleChange} name="age" value={this.state.age} /></div>
            <div><input onChange={this.handleChange} name="height" value={this.state.height} /></div>
            <button onClick={()=>{this.addEditSmurf()}}>Save</button>
            <button>Delete</button>
            </div>
        );
      }else{
        return(
        	<div>
              <div>{smurf.name}</div>
              <div>{smurf.age}</div>
              <div>{smurf.height}</div>
              <button onClick={()=>{this.handleEdit(this.props.id)}}>Edit</button>
              <button>Delete</button>
              </div>
        );
      }
  }

  render() {
    return (
      <div>
        {this.renderHelper()}
      </div>
    );
  }
}



export default connect(null, {editSmurf, editToggle})(Smurf);