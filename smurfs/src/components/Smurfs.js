import React, { Component } from "react";
import { getSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";

class Smurfs extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      height: ""
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInput = e => {
      this.setState({ [e.target.name]: e.target.value });
  }

  handleAddSmurf = () => {
    this.props.addSmurf({ name: this.state.name, age: this.state.age, height: this.state.height });
    this.setState({ name: '', age: null, height: '' });
  }
  render() {
    return (
      <div>
        <form> 
            <input name='name' placeholder='name' value={this.state.name} onChange={this.handleInput}/>
            <input name='age' placeholder='age'value={this.state.age} onChange={this.handleInput}/>
            <input name='height' placeholder='height' value={this.state.height} onChange={this.handleInput}/>
            <button onClick={this.handleAddSmurf}>Submit</button>
        </form>
            {this.props.smurfs.map((smurf) => {
                return (
                    <div key={smurf.name}>
                        <ul>
                            <h3>Name: {smurf.name}</h3>
                            <li>Age: {smurf.age} </li>
                            <li>Height: {smurf.height} </li>
                        </ul>
                        </div>
                )
            })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return (
        {
    smurfs: state.smurfs,
   
        }    
)
}
export default connect(mapStateToProps, { addSmurf, getSmurfs })(Smurfs);
