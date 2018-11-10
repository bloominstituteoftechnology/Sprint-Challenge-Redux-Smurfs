import React from 'react';
import {connect} from 'react-redux';
import {deleteSmurf, updateSmurf} from "../actions";

class Smurf extends React.Component {
constructor(props){
    super(props);
    this.state={
        isEditing:false,
        updatedSmurf:{
            name:'',
            age:'',
            height:''
        }
    }
}

submitAndGoBack = (event) => {
    event.preventDefault();
    this.alterSmurf(event);
    this.toggleEditing();
}

alterSmurf = event => {
    event.preventDefault();
    let smurf=this.state.updatedSmurf;
    if (smurf.name!=='' && smurf.age!=='' && smurf.height!==''){
    this.props.updateSmurf(this.props.smurf.id, this.state.updatedSmurf)
this.setState({updatedSmurf:{
    name:'',
    age:'',
    height:''
}})
} else {
alert("Fill out all fields before submitting your changes")
}
}

toggleEditing = () => {
    this.setState({
        ...this.state,
        isEditing: !this.state.isEditing})
}

    gargamelGotEm = event => {
        event.preventDefault();
        this.props.deleteSmurf(this.props.smurf.id);
    }

    changeHandler=(key, value) => {
        this.setState({
            ...this.state,
            updatedSmurf:{
                ...this.state.updatedSmurf,
                [key]:value}
        })
    }

    render (){
        if (!this.state.isEditing){
        return (
            <div className='smurf'>
            <h3>{this.props.smurf.name}</h3>
            <h3>{this.props.smurf.age} years old</h3>
            <h3>{this.props.smurf.height} tall</h3>
            <button className="delete-button" onClick={this.gargamelGotEm}>Delete smurf</button>
            <button className="edit-button" onClick={this.toggleEditing}>Edit smurf</button>
            </div>
        )
        } else {
            return (
                <div className='smurf'>
                <form className="editing-form" onSubmit={this.submitAndGoBack}>
                <input
                type='text'
                placeholder='Name'
                value={this.state.updatedSmurf.name}
                name="name"
                onChange={event=>this.changeHandler(event.target.name, event.target.value)}
                />
                <input
                type='text'
                placeholder='Age'
                value={this.state.updatedSmurf.age}
                name="age"
                onChange={event=>this.changeHandler(event.target.name, event.target.value)}
                />
                <input
                type='text'
                placeholder='Height'
                value={this.state.updatedSmurf.height}
                name="height"
                onChange={event=>this.changeHandler(event.target.name, event.target.value)}
                />
                <button className="submit-edit-button">Submit changes</button>
                </form>
                <button className="cancel-edit-button" onClick={this.toggleEditing}>Cancel edit</button>
                </div>
            )
        }
    }
}


export default connect(
    null,
    {deleteSmurf, updateSmurf}
)(Smurf);