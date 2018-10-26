import React from "react";

class DeleteSmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
        }
    }

    changeHandler = e => this.setState({[e.target.name]: e.target.value});

    deleteSmurfHandler = e => {
        e.preventDefault();
        this.props.deleteSmurf(this.state.id)
        this.setState({ id: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.deleteSmurfHandler}>
                    <input 
                        onChange={this.changeHandler} 
                        placeholder="Enter a lame smurf's id here." 
                        value={this.state.id} 
                        name="id">
                    </input>
                    <button type="submit">Sacrifice a smurf to Gargamel!</button>
                </form>  
            </div>
        )
    }
}

export default DeleteSmurfForm;