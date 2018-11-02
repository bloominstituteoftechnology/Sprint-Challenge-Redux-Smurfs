import React, { Component } from "react";
import { connect } from "react-redux";
import {  addSmurf } from "../actions";

class SmurfForm extends Component {
    state = {
        name: "",
        age: "",
        height: ""
      };

     

    editSmurfHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }
    addSmurfs = () => {
        const { name, age, height } = this.state;
        this.props.addSmurf({
            name,
            age,
            height
        });
        this.setState({ name: '', age: '', height: '' });
    };
            

render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.editSmurfHandler}
            placeholder="Name"
          />
          <br />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.editSmurfHandler}
            placeholder="Age"
            />
            <br />
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.editSmurfHandler}
              placeholder="Height"
              />
              <br />
              <button onClick={ () => this.addSmurfs()} type='button'> Add Smurf </button>
            </form>
          </div>
        );
      }
    }
              
            
const mapStateToProps = state => {}     
   
      
    

export default connect(
    mapStateToProps,
    {
      addSmurf,
      
    }
  )(SmurfForm);









