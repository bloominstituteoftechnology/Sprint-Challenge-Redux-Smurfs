import React from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';
import './createSmurfForm.css'

class CreatSmurfForm extends React.Component {
    state = {
        Fields: {
            name: '',
            age: '',
            height: '',
        }
    }

    handleInputChange = (event) => {
        const {name, value } = event.target;
        // console.log(name, value)
        const fields = this.state.Fields;
        fields[name] = value;
        // console.log(fields);
        this.setState({ Fields: fields });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addSmurf(this.state.Fields);
        this.setState({
            Fields: {
                name: '',
                age: '',
                height: '',
            }
        });
    };

    render() {
        return (
            <div className="Container">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend> ADD A NEW SMURF!</legend>
                            <input onChange={this.handleInputChange} value={this.state.Fields.name} name="name" placeholder="Enter Name" type="text"/>
                            <input onChange={this.handleInputChange} value={this.state.Fields.age} name="age" placeholder="Enter Age" type="number"/>
                            <input onChange={this.handleInputChange} value={this.state.Fields.height} name="height" placeholder="Height In Cm" type="text"/>                            
                            <button>ADD SMURF</button>
                    </fieldset>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state;
}
export default connect(mapStateToProps, { addSmurf })(CreatSmurfForm);