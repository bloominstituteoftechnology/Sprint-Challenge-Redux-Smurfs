import React, { Component } from 'react';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class AddSmurf extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
    
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
    this.addSmurf = this.addSmurf.bind(this)
  }

  updateName(event) {
    this.setState({
      
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
    console.log(this.state)
  }

  addSmurf(event) {
    console.log('AddSmurf Props', this.props)
    this.props.addSmurf({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      })
    this.setState({
      name: '',
      age: '',
      height: ''
    });
}



  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            type='text'
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            type='number'
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            type='text'
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      fetching: state.fetching,
      smurfs: state.smurfs,
      error: state.errorMessage,
    };
};

export default connect(mapStateToProps, { addSmurf })(AddSmurf);