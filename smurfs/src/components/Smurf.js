import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, updateSmurf, deleteSmurf } from "../actions";

class Smurf extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            age: '',
            height: '',
            id: '',
            edit: false
        }
    }

    componentDidMount() {
        const { name, age, height, id } = this.props.smurf;
        this.setState({ name, age, height, id})
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handleUpdate = (id, smurf) => {
        this.props.updateSmurf(smurf);
        this.setState({edit: false});
    }

    handleDelete = (id) => {
        this.props.deleteSmurf(id);
    }

    render() {
        const { name, age, height, email, id, edit } = this.state;
        return (
            <div>
                {edit ? (
                    <form>
                        <input name="name" placeholder={name} value={name} onChange={(e) => this.handleChange(e)}/>
                        <input name="age" placeholder={age} value={age} onChange={(e) => this.handleChange(e)}/>
                        <input name="height" placeholder={height} value={height} onChange={(e) => this.handleChange(e)}/>
                        <div>
                            <button onClick={() => this.handleUpdate(id, {name, age, email})}>Save</button>
                            <button className="delete" onClick={() => this.handleDelete(id)}>Delete</button>
                        </div>
                    </form>   
                ) : (
                    <div>
                        <h3>{name}</h3>
                        <p>{age}</p>
                        <p>{height}</p>
                        <button className="edit" onClick={() => this.setState({ edit: true })}>Edit</button>
                    </div>
            )}
            </div>
        );
    }
}

export default connect(null, { getSmurfs, updateSmurf, deleteSmurf })(Smurf);