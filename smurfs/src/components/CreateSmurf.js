import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class CreateSmurf extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            height: '',
            age: ''
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    saveNewSmurf = () => {
        this.props.addSmurf({ 
            name: this.state.name, 
            age: this.state.age,
            height: this.state.height
        })
        this.setState({
            name: '',
            age: '',
            height: this.state.height
        })
    }

    render() { 
        console.log("this.state:", this.state)
        return ( 
            <div>
                 <form className='smurf-form'>
                    <input 
                        type="text" 
                        onChange={this.handleInput} 
                        name='name' 
                        value={this.state.name} 
                        placeholder="Name" 
                    />
                    <input 
                        type="number" 
                        onChange={this.handleInput} 
                        name='age' 
                        value={this.state.age} 
                        placeholder="Age" 
                    />
                    <input 
                        type="text" 
                        onChange={this.handleInput} 
                        name='height' 
                        value={this.state.height} 
                        placeholder="Height" 
                    />
                    <button onClick={this.saveNewSmurf} >Save Smurf</button>
                </form>
            </div>
         )
    }
}

const mapStateToProps = state => {
    console.log("ADD_SMURF STATE:", state)
    return {
        smurfs: state.smurfs
    }
}
 
export default connect(mapStateToProps, { addSmurf }) (CreateSmurf);