import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";

class AddSmurf extends Component {
    constructor() {
        super() 
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handleAdd = () => {
        this.props.addSmurf(this.state);
        this.props.getSmurfs();
    }

    render() {
        const { name, age, height } = this.state;
        return (
            <div>
                <form>
                    <input name="name" placeholder="name" value={name} onChange={(e) => this.handleChange(e)}/>
                    <input name="age" placeholder="age" value={age} onChange={(e) => this.handleChange(e)}/>
                    <input name="height" placeholder="height" value={height} onChange={(e) => this.handleChange(e)}/>
                    <button onClick={() => this.handleAdd}>Save</button>
                </form>   
            </div>
        );
    }
}

export default connect(null, { getSmurfs, addSmurf })(AddSmurf);