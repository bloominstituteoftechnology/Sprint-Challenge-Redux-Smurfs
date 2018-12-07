import React from 'react';

class EditSmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.smurfName,
            age: this.props.smurfAge,
            height: this.props.smurfHeight
        });
    }

    editSmurf = e => {
        e.preventDefault();
        this.props.updatingSmurfHandler(this.props.smurfId, this.state);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.editSmurf} className='newSmurfForm'>
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
                    <button className='newSmurfForm-Btn edit-btn'>Edit {} Smurf</button>
                </form>
            </div>
        );
    }
}

export default EditSmurfForm;