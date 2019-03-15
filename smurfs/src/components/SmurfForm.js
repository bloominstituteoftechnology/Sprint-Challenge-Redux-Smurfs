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
          <form className="SmurfForm"> 
            <h2 className="form-title">Edit or add a smurf!</h2>
            <h2 className="form-sub-title">Please don't kidnap!</h2>
                <div className="inputs"> 
                    <div className= "input">
                        <span>Name:</span>
                        <input
                            onChange={this.handleInputChange}
                            placeholder="Name"
                            value={this.state.name}
                            name="name"
                        />
                    </div>
                    <div className= "input">
                        <span>Age:</span>
                        <input
                            onChange={this.handleInputChange}
                            placeholder="Age"
                            value={this.state.age}
                            name="age"
                        />
                    </div> 
                    <div className= "input">
                        <span>Height:</span>
                        <input
                            onChange={this.handleInputChange}
                            placeholder="Height"
                            value={this.state.height}
                            name="height"
                        />
                    </div>   
                </div>             
            
                <div className="buttons">
                    <button onClick = {this.handleAdd}>Add to the village</button>
                    <button onClick = {this.handleUpdate}>Mutate selected smurf</button>
                    <button onClick = {this.handleDelete}>Kidnap selected smurf</button>
                </div>             
          </form>        
      );
    }
  }
  const mapStatetoProps = (state) => {
    return{
        id: state.selectedId
    }
}
  export default connect(mapStatetoProps,{ addSmurf, updateSmurf, deleteSmurf })(SmurfForm);