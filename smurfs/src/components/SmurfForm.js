import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {createSmurf} from '../actions/index'; 
 class SmurfForm extends Component {
    state={
        name: '', 
        age: '', 
        height: '', 
    }; 
    handleInputChange = event => {
        this.setState({[event.target.name]: event.target.value}); 
    }
     handleAddSmurf = _ =>{
        const {name, age, height} = this.state; 
        this.props.createSmurf({name, age, height});
        this.setState({name: '', age: '', height: '',}); 
    }; 
     render(){
        return (
        <form className='layout'>
        <input
        className='input'
        name='name'
        type='text'
        value={this.state.name}
        placeholder='name'
        onChange={this.handleInputChange}
        />
         <input
        className='input'
        name='age'
        type='text'
        value={this.state.age}
        placeholder='age'
        onChange={this.handleInputChange}
        />
         <input
        className='input'
        name='height'
        type='text'
        value={this.state.height}
        placeholder='height'
        onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddSmurf()} type="button">
        Add to Village
        </button>
        </form>
        ); 
    };
}
const mapStateToProps = state =>{
    return{
        error: state.error, 
        addingSmurf: state.addingSmurf
    };
}
export default connect(mapStateToProps, {createSmurf})(SmurfForm);