import React from "react";

class CreateSmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            height: ""
        }
    }

    changeHandler = e => this.setState({[e.target.name]: e.target.value});

    addSmurfHandler = e => {
        e.preventDefault();
        let { name, age, height } = this.state;
        this.props.addSmurf({ name, age, height })
        this.setState({ name: "", age: "", height: "" })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addSmurfHandler}>
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
                    <button type="submit">Add a new smurf!</button>
                </form>  
            </div>
        )
    }
}

export default CreateSmurfForm;