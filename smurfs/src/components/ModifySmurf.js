import React from 'react';
import { connect } from 'react-redux';
import { updateSmurf } from '../actions';

class ModifySmurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
    id: '',
  }

  componentDidMount() {
    console.log('before the setting', this.state);
    this.setState({...this.props.smurfInfo})
    console.log('after the setting', this.state);
  }

  submitNewSmurf = (event) => {
    event.preventDefault();
    const newSmurf = Object.assign({}, this.state);
    this.props.updateSmurf(newSmurf, newSmurf.id);
    this.props.doneModifying();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitNewSmurf}>
          <input
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            name="age"
            placeholder="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input
            name="height"
            placeholder="height"
            onChange={this.handleChange}
            value={this.state.height}
          />
          <button type="submit" >Save Smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { updateSmurf })(ModifySmurf);