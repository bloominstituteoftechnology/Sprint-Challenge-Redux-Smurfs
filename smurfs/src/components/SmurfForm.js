import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf, deleteSmurf, updateSmurf } from '../actions'

class SmurfForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        age: '',
        height: ''
      };
    }    
  
    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
    
    handleAdd = e =>{
        e.preventDefault();        

        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        };

        this.props.addSmurf(smurf);
        this.setState({ name: '',  age: '', height: '' })
    }

    handleUpdate = e =>{
        e.preventDefault();        

        const smurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
            selected: false
        };

        this.props.updateSmurf(this.props.id, smurf);
        this.setState({ name: '',  age: '', height: '' })
    }

    handleDelete = e => {
        e.preventDefault();
        this.props.deleteSmurf(this.props.id)
    }

    render() {
      return (
        <div className="SmurfForm">
          <form>
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
            <button onClick = {this.handleAdd}>Add to the village</button>
            <button onClick = {this.handleUpdate}>Mutate selected smurf</button>
            <button onClick = {this.handleDelete}>Kidnap selected smurf</button>
          </form>
        </div>
      );
    }
  }
  const mapStatetoProps = (state) => {
    return{
        id: state.selectedId
    }
}
  export default connect(mapStatetoProps,{ addSmurf, updateSmurf, deleteSmurf })(SmurfForm);