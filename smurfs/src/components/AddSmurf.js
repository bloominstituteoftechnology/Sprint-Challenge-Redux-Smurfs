import React, { Component } from "react";
import { connect } from 'react-redux';
import { addSmurf, updateSmurf } from '../actions';
import { bindActionCreators } from "redux";

class AddSmurf extends Component {
  /*
    we need a few things:
    name
    age
    height
    and some sort of button!
  */

  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: "",
      //currentSmurf: 
    };
  }

  componentDidUpdate = (previousProps) => 
  {
    if (this.props.currentSmurf && this.props.currentSmurf !== previousProps.currentSmurf)
    this.updateSmurf() 
    
  }


  

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.props.currentSmurf) (this.props.updateSmurf(this.state)) 
    else (this.props.addSmurf(this.state))
    this.setState(
      (this.state = {
        name: "",
        age: "",
        height: ""
        
      })
    );
  };

  updateSmurf = () => {
    this.setState(    
        this.props.currentSmurf
    )
  };


  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Please add name"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Please add age"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="height"
            value={this.state.height}
            placeholder="Please add height"
          />
          <button>{ this.props.currentSmurf ? `Please Update!` : `Please Submit Smurf`}</button>
        </form>
      </div>
    );
  };

}

const mapStateToProps = state => ({

  currentSmurf: state.currentSmurf,

});

export default connect(
    mapStateToProps, { addSmurf, updateSmurf })(AddSmurf);