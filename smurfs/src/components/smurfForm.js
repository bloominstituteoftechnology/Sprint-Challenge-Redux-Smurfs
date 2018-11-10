import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: ''
    };


    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    handleAddSmurf = _ => {
        const { name, age, height } = this.state;
        this.props.createSmurf({ name, age, height });
        this.setState({ name: '', age: '', height: '' });
    };




    /*  addSmurf = event => {
       event.preventDefault();
       // add code to create the smurf using the api
       axios.post('http://localhost:3333/smurfs', {
         name: this.state.name,
         age: this.state.age,
         height: this.state.height,
         id: this.state.id
       })
         .then(response => {
           this.setState(() => ({ smurfs: response.data }));
         })
         .catch(error => {
           console.log(error);
         });
   
       this.setState({
         name: '',
         age: '',
         height: '',
         id: ''
       });
       window.location.reload();
     } */

    render() {
        return (
            <form className="Column-Layout">
                <input
                    className="input"
                    value={this.state.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    onChange={this.handleInputChange}
                />
                <input
                    className="input"
                    value={this.state.age}
                    name="age"
                    type="text"
                    placeholder="Age"
                    onChange={this.handleInputChange}
                />
                <input
                    className="input"
                    value={this.state.height}
                    name="height"
                    type="text"
                    placeholder="Height"
                    onChange={this.handleInputChange}
                />
                <button onClick={() => this.handleAddSmurf()} type="button" className="button">
                    Add New Smurf
        </button>
            </form>

        );
    }}


        const mapStateToProps = state => {
            return {
                error: state.error,
                creatingSmurf: state.creatingSmurf
            };
        };

        export default connect(mapStateToProps, { createSmurf })(SmurfForm);






