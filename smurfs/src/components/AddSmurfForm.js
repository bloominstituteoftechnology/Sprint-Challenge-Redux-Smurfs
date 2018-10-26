import React from 'react';
import {addSmurf} from "../actions";
import {connect} from 'react-redux';

class AddSmurfForm extends React.Component {
    constructor(){
        super();
    this.state={
        name:'',
        age:'',
        height:''
    }
    }

    changeHandler=(key, value) => {
        this.setState({
            ...this.state,
            [key]:value
        })
    }

createSmurf= event => {
    event.preventDefault();
    let smurf=this.state;
    if (smurf.name!=='' && smurf.age!=='' && smurf.height!=='') {
        this.props.addSmurf(smurf);
        this.setState({
            name:'',
            age:'',
            height:''
        })
    } else {
        alert ('Finish filling out all fields before submitting this form')
    }
}

render () {
    return (
        <div>
            <h1>Smuuuuuurfs</h1>
            <form className="add-smurf-form" onSubmit={this.createSmurf}>
<input
type='text'
placeholder='Name'
value={this.state.name}
name="name"
onChange={event=>this.changeHandler(event.target.name, event.target.value)}
/>
<input
type='text'
placeholder='Age'
value={this.state.age}
name="age"
onChange={event=>this.changeHandler(event.target.name, event.target.value)}
/>
<input
type='text'
placeholder='Height'
value={this.state.height}
name="height"
onChange={event=>this.changeHandler(event.target.name, event.target.value)}
/>
<button type='submit'>Add smurf to village</button>
            </form>
        </div>
    )
}
}

const maptStateToProps = state => {
    return {
        creating: state.creating
    }
}

export default connect(
    maptStateToProps,
    {addSmurf}
)(AddSmurfForm);