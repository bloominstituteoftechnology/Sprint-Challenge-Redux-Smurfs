import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { createSmurfs} from '../actions';
import '../App.css';
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
            <label className="forms">
                Name:
                <input 
                className="input"
                value={this.state.name}
                type="text"
                placeholder="Name"
                onChange={this.handleInputChange}
                />
            </label>
            
            <label className="forms">
                Age:
                <input 
                className="input"
                value={this.state.age}
                placeholder="age"
                type="text"
                onChange={this.handleInputChange}
                />
            </label>
            <label className="forms">
                Email:
                <input 
                className="input"
                value={this.state.height}
                type="text"
                placeholder="Height"
                onChange={this.handleInputChange}
                />
            </label>
            
            <button type="submit">
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