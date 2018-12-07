import React from 'react';
import './AddNewSmurf.css';

class AddSmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    addingNewSmurf = e => {
        e.preventDefault();
        this.props.addNewSmurf(this.state);
        this.setState({
            name: '',
            age: '',
            height: ''
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addingNewSmurf} className='newSmurfForm'>
                    <input 
                        type="text"
                        required='true'
                        placeholder='name'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        className='inputField'
                        autoComplete='off'
                    />
                    <input 
                        type="text"
                        required='true'
                        placeholder='age'
                        name='age'
                        value={this.state.age}
                        onChange={this.handleChange}
                        className='inputField'
                        autoComplete='off'
                    />
                    <input 
                        type="text"
                        required='true'
                        placeholder='height'
                        name='height'
                        value={this.state.height}
                        onChange={this.handleChange}
                        className='inputField'
                        autoComplete='off'
                    />
                    <button className='newSmurfForm-Btn'>Add Smurf</button>
                </form>
            </div>
        );
    }
}

export default AddSmurfForm;