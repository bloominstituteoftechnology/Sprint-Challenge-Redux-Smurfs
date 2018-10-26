import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { createSmurfs} from '../actions';
import './App.css';
class SmurfForm extends Component {
    state={
        name: '', 
        age: '', 
        height: '', 
    }; 
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value}); 
    }; 

    handleAddSmurf = _ => {
        const {name, age, height} = this.state; 
        this.props.createSmurfs({name, age, height}); 
        this.setState({name: '', age:'', height:''}); 
    }; 
    render() {
        return(
            <form className="layout" onSubmit={() => this.handleAddSmurf()}>
            <label className="labels">
                Name:
                <input 
                className="input"
                value={this.state.name}
                name="name"
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
                />
            </label>
            
            <label className="labels">
                Age:
                <input 
                className="input"
                value={this.state.age}
                name="age"
                placeholder="age"
                type="text"
                onChange={this.handleInputChange}
                />
            </label>
            <label className="labels">
                Height:
                <input 
                className="input"
                value={this.state.height}
                name="height"
                type="text"
                placeholder="Height"
                onChange={this.handleInputChange}
                />
            </label>
            
            <button type="submit" className="submit-button">
                Add New Smurf
            </button>
            </form>
        );
    }
}

const mapStateToProps = state =>{
    return{
        error: state.error, 
        creatingSmurfs: state.creatingSmurfs
    };
};

export default connect(mapStateToProps, { createSmurfs })(SmurfForm); 