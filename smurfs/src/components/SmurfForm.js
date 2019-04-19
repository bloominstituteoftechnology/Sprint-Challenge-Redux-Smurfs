import React from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
  
    };
  }

  componentDidMount(){
    this,props.addSmurf();
  }

  handleInputChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
            type='text'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type='number'
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type='text'
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      addingSmurfs: state.addingSmurfs
    }
}
export default connect(mapStateToProps, {addSmurf})(SmurfForm)
