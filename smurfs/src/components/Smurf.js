import React, { Component } from "react";
import { connect } from "react-redux";

class Smurf extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            age: '',
            height: '',
            edit: false
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value})
    }

    handleUpdate = () => {
        this.props.updateSmurf();
        this.setState({edit: false});
    }

    handleDelete = (id) => {
        this.props.deleteSmurf(id);
        this.props.getSmurfs();
    }

    render() {
        const { name, age, height, edit } = this.state;
        const { nameProp, ageProp, heightProp, id } = this.props.smurf;
        return (
            <div>
                {edit ? (
                    <form>
                        <input name="name" placeholder={nameProp} value={name} onChange={(e) => this.handleChange(e)}/>
                        <input name="age" placeholder={ageProp} value={age} onChange={(e) => this.handleChange(e)}/>
                        <input name="height" placeholder={heightProp} value={height} onChange={(e) => this.handleChange(e)}/>
                        <button onClick={() => this.handleUpdate}>Save</button>
                        <button onClick={() => this.handleDelete}>Delete</button>
                    </form>   
                ) : (
                    <div>
                        <h3>{nameProp}</h3>
                        <p>{ageProp}</p>
                        <p>{heightProp}</p>
                        <button onClick={() => this.setState({ edit: true })}>Edit</button>
                    </div>
            )}
            </div>
        );
    }
}

export default connect(null, { deleteSmurf, getSmurfs, updateSmurf })(Smurf);