import React from 'react';
import {connect} from 'react-redux';

import {addSmurf} from '../actions/index';

class AddSmurf extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleInput = event=>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event=>{
        event.preventDefault();
        if(this.state.name === ''){
            return;
        }

        this.props.addSmurf(Object.assign({}, this.state, {age: Number(this.state.age), height: Number(this.state.height)}));
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleInput} placeholder="Enter smurf's name..."/>
                    <input type="number" name="age" value={this.state.age} onChange={this.handleInput} placeholder="Enter smurf's age..."/>
                    <input type="number" name="height" value={this.state.height} onChange={this.handleInput} placeholder="Enter smurf's height..."/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state=>{
    return {}
}

export default connect(mapStateToProps, {addSmurf})(AddSmurf);