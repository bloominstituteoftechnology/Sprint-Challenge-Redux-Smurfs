import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { createSmurfs } from '../actions';
import './App.css';

class SmurfForm extends Component {
    state={
        name: '', 
        age: '', 
        email: '', 
    }; 
    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value}); 
    }; 

    handleAddSmurf = _ => {
        const {name, age, email} = this.state; 
        this.props.createSmurfs({name, age, email}); 
        this.setState({name: '', age:'', email:''}); 
    }; 
    render() {
        return(
        <div className="SmurfForm">
         <div className="form">
          <form onSubmit={() => this.handleAddSmurf()}>
            <label>
                Name:
                <input
                onChange={this.handleInputChange}
                type="text"
                placeholder="name"
                value={this.state.name}
                name="name"
                /> <br></br>
            </label>
            <label>
                Age:
                <input
                onChange={this.handleInputChange}
                type="text"
                placeholder="age"
                value={this.state.age}
                name="age"
                /> <br></br>
            </label>
            <label>
                Height:
                <input
                onChange={this.handleInputChange}
                type="text"
                placeholder="height"
                value={this.state.height}
                name="height"
                />
            </label>
            
            <button className="submit" type="submit" >Add to the village</button>
          </form>
        </div>
      </div>
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