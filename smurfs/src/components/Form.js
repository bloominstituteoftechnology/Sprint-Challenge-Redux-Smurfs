import React from "react";

class Form extends React.Component {
    constructor(props) {
        super (props);        
            this.state = {
                id: this.props.smurf.id,
                name: this.props.smurf.name,
                age: this.props.smurf.age,
                height: this.props.smurf.height
            };
        } 
        
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.edit) {
            this.props.editSmurf(this.state, this.props.match.params.itemId);
        } else {
            this.props.addSmurf(this.state);
        }
        this.props.history.push('/smurfs');
    };
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    name='name'
                    type='text'
                    value={this.state.name}
                    placeholder='add Smurf'
                    onChange={this.handleChanges}
                    />
                    <input
                        name='age'
                        type='number'
                        value={this.state.age}
                        placeholder='age'
                        onChange={this.handleChanges}
                    />
                    <input
                        name='height'
                        type='text'
                        value={this.state.height}
                        placeholder='how tall?'
                        onChange={this.handleChanges}
                    />
                    <button className='btn'>{this.props.smurf ? `save changes` : `add smurf`}</button>
                </form>
            </div>
        );
    }
}


export default Form;