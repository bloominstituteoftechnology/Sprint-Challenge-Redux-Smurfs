import React from "react";

class UpdateSmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            height: "",
            id: +""
        }
    }

    changeHandler = e => this.setState({[e.target.name]: e.target.value});

    updateSmurfHandler = e => {
        e.preventDefault();
        let { name, age, height, id } = this.state;
        this.props.updateSmurf({ name, age, height, id })
        this.setState({ name: "", age: "", height: "", id: +"" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.updateSmurfHandler}>
                    <input 
                        onChange={this.changeHandler} 
                        placeholder="Who needs to change?" 
                        value={this.state.id} 
                        name="id">
                    </input>
                    <input 
                        onChange={this.changeHandler} 
                        placeholder="name" 
                        value={this.state.name} 
                        name="name">
                    </input>
                    <input 
                        onChange={this.changeHandler} 
                        placeholder="age" 
                        value={this.state.age} 
                        name="age">
                    </input>
                    <input 
                        onChange={this.changeHandler} 
                        placeholder="height" 
                        value={this.state.height} 
                        name="height">
                    </input>
                    <button type="submit">Change a smurf!</button>
                </form>  
            </div>
        )
    }
}

export default UpdateSmurfForm;