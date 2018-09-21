import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';
import './App.css';
import axios from 'axios';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        };    
    }

    handleInputChange = (event)=> {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }

    addSmurf = event => {
        event.preventDefault();
        // add code to create the smurf using the api
    
        this.setState({
          name: '',
          age: '',
          height: ''
        });
      }

    handleAddSmurf = (event)=> {
        axios.post('http://localhost:3333/smurfs', {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        })
            .then(response=> {
                console.log(response);
                this.setState({smurfs: response.data})
            })
            .catch(err=> {
                console.log(err);
            })

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddSmurf}>
                    <input 
                        name='name'
                        value={this.state.name}
                        placeholder='Name'
                        type='text'
                        onChange={this.handleInputChange}
                    />
                    <input
                        name='age'
                        value={this.state.age}
                        placeholder='Age'
                        type='text'
                        onChange={this.handleInputChange}
                    />
                    <input 
                        name='height'
                        value={this.state.height}
                        placeholder='Height'
                        type='text'
                        onChange={this.handleInputChange}
                    />
                    <button type='submit'>Add Smurf to the Village</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state=> {
    return {
        smurfs: state.smurfs
    };
}

export default connect(mapStateToProps, {addSmurf})(SmurfForm);