import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurfs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age:"",
            height:"",
            name:""
        }
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.addSmurf(this.state);
        this.setState({
        name: "",
        age: "",
        height: ""
        });
        }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    
    render() {
    return (
            <div>
                <h3 className="">Add a smurf</h3>
                <div>
                    <form onSubmit={this.submitHandler} className="form">
                        <input 
                        onChange={this.handleInputChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                        />

                        <input 
                            onChange={this.handleInputChange}
                            placeholder="age"
                            value={this.state.age}
                            name="age"
                            />

                        <input 
                            onChange={this.handleInputChange}
                            placeholder="height"
                            value={this.state.height}
                            name="height"
                            />
                        
                        <button type="submit">Add to the village</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {};
}
export default connect (mapStateToProps,{addSmurf})(AddSmurfs);