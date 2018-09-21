import React from 'react';
import SmurfAdder from './smurfAdder';
import {createSmurf} from '../actions';
import {connect} from 'react-redux';

class CreaterContainer extends React.Component{
    state = {
        name: '',
        age: '',
        height: '',
    };

    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value });
    }
    
    addSmurf = event =>{
        event.preventDefault();
        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        }
        this.props.createSmurf(smurf);
    }

    render(){
        return(
            <SmurfAdder 
                name={this.name}
                age={this.age}
                height={this.height}
                handleChange={this.handleChange}
                addSmurf={this.addSmurf}
            />
        )
    }
}

const mapStateToProps = state =>({

});

export default connect(mapStateToProps, {createSmurf})(CreaterContainer);