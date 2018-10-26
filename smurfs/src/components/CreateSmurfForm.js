import React from 'react';
import {connect} from 'react-redux';
import { addNewSmurf } from '../actions';

class CreateSmurfForm extends React.Component {
    state = {
        name: '',
        age: '',
        height: '',
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    hadnleAddNewSmurf = (event) => {
        event.preventDefault();

        const smurf = this.state;
        this.props.addNewSmurf(smurf);
        this.setState({ name: '', age: '', height: ''});
    }

    render(){
        return (
            <div>
                <form onSubmit={this.hadnleAddNewSmurf}>
                    <input name ='name' value={this.state.name} type='text' onChange={this.handleInputChange} placeholder='Name'/>
                    <input name ='age' value={this.state.age} type='number' onChange={this.handleInputChange} placeholder='Age'/>
                    <input name ='height' value={this.state.height} type='text' onChange={this.handleInputChange} placeholder='Height'/>
                    <button type='submit'>Add New Smurf</button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(mapStateToProps, {addNewSmurf})(CreateSmurfForm);