import React, { Component } from 'react';
import { Route } from 'react-router-dom';

export default function Form(props) {
	return (
		<div>
            <Route exact path="/" 
                render={routeProps => 
                <AddForm 
                    {...routeProps} 
                    addSmurf={props.addSmurf} 
                />} 
            />
            <Route path="/:id"
                render={routeProps =>
                <EditForm
                    {...routeProps}
                    editSmurf={props.editSmurf} 
                />} 
            />
		</div>
	);
}

class AddForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    changeHandler = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    onChange={this.changeHandler} 
                    name="name" 
                    value={this.state.name}
                    placeholder="" 
                />
                <input 
                    onChange={this.changeHandler} 
                    name="age" 
                    value={this.state.age}
                    placeholder="" 
                />
                <input 
                    onChange={this.changeHandler} 
                    name="height" 
                    value={this.state.height}
                    placeholder="" 
                />
                <button type="submit">Add Smurf</button>
            </form>
        );
    }

}

class EditForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: '',
        }
    }

    changeHandler = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.editSmurf(this.state, this.props.match.params.id);
        console.log(this.state, this.props.match.params.id);
        this.setState({
            name: '',
            age: '',
            height: '',
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input 
                    onChange={this.changeHandler} 
                    name="name" 
                    value={this.state.name}
                    placeholder="" 
                />
                <input 
                    onChange={this.changeHandler} 
                    name="age" 
                    value={this.state.age}
                    placeholder="" 
                />
                <input 
                    onChange={this.changeHandler} 
                    name="height" 
                    value={this.state.height}
                    placeholder="" 
                />
                <button type="submit">Update Smurf</button>
            </form>
        );
    }

}