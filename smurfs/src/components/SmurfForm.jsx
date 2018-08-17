import React, { Component } from "react";
import axios from "axios";
import { smurfsAdd,smurfsEdit } from "../actions";
import { connect } from "react-redux";
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: "",
      smurfAmount: 10
    };
  }

  addSmurf = event => {
    if (event) {
      event.preventDefault();
    }

    this.props.smurfsAdd({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
  modSmurf = event => {
    console.log(event);
    if (event) {
      event.preventDefault();
    }
     this.props.smurfsEdit(this.props.whom,{
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
   
  };

  repopulate = () => {
    axios
      .get(`https://randomuser.me/api/?results=${this.state.smurfAmount}`)
      .then(response => {
        response.data.results.forEach(element => {
          this.setState({
            name: `${element.name.first} ${element.name.last}`,
            age: element.dob.age * 4,
            height: Math.floor(element.dob.age / 10) + 5
          });
          this.addSmurf();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.whom !== prevProps.whom) {
      if (this.props.whom !== -1) {
        this.setState({
          name: this.props.smurfs[this.props.whom].name,
          age: this.props.smurfs[this.props.whom].age,
          height: this.props.smurfs[this.props.whom].height
        });
      }
      else{
        this.setState({
          name:'',
          age:'',
          height:''
        })
      }
    }
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.props.mode === 'INPUT' ? this.addSmurf:this.modSmurf}>
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
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type="number"
          />
          <button type="submit">
            {this.props.mode === "Input"
              ? "Add to the village"
              : "Change that smurf"}

            {}
          </button>
        </form>
        <input
          value="10"
          type="number"
          onChange={this.handleInputChange}
          name="smurfAmount"
        />
        <button onClick={this.repopulate}> Repopulate </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    smurfsFetched: state.smurfsFetched,
    whom: state.whom,
    mode: state.mode
  };
};
export default connect(
  mapStateToProps,
  { smurfsAdd, smurfsEdit }
)(SmurfForm);
