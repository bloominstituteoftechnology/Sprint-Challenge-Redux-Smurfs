import React from 'react';
import {connect} from 'react-redux';

import {updateSmurf} from '../actions/index';

class UpdateSmurf extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: props.smurf.name,
            age: props.smurf.age,
            height: props.smurf.height,
            id: props.smurf.id
        }
    }

    handleInput = event=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event=>{
        event.preventDefault()
        this.props.updateSmurf(Object.assign({}, this.state, {age: Number(this.state.age), height: Number(this.state.height)}));
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput}/>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleInput}/>
                    <input type="number" name="height" value={this.state.height} onChange={this.handleInput}/>
                    <button type="submit">Update</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {}
}

export default connect(mapStateToProps, {updateSmurf})(UpdateSmurf);