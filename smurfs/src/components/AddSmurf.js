import React from 'react';

class AddSmurf extends React.Component{
    render(){
        return(
            <div>
                <input name='name' 
                        placeholder='name'
                        type='text'
                        value={this.props.inputName}
                        onChange={this.props.handleChange} /><br />
                <input name='age'
                        placeholder='age'
                        type='number'
                        value={this.props.inputAge}
                        onChange={this.props.handleChange} /><br />
                <input name='height'
                        placeholder='height'
                        type='number'
                        value={this.props.inputHeight}
                        onChange={this.props.handleChange} /><br />
                <button onClick={this.props.addSmurf}>
                    Add Smurf
                </button>
            </div>
        )
    }
}

export default AddSmurf;