import React from 'react';
import { addSmurf, loadSmurfs } from '../actions';
import { connect } from 'react-redux';

class CreateSmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: '',
    });
  }

  componentWillReceiveProps() {
    this.props.loadSmurfs();
  }

  onChange = (event) => {
    let { name, value } = event.target;
    if (event.target.type === 'number') {
      value = Number(value);
    }
    this.setState({ [name]: value});
  }

  render() {
    return (
      <div>
        <div>Add Smurf</div>
        <form onSubmit={this.onSubmit}>
            <input onChange={this.onChange} type='text' placeholder='name' name='name' value={this.state.name} require='true' />
            <input onChange={this.onChange} type='number' placeholder='age' name='age' value={this.state.age} require='true' />
            <input onChange={this.onChange} type='number' placeholder='height' name='height' value={this.state.height} require='true' />
            <button type='submit'>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    adding: state.adding,
    removed: state.removed,
    updated: state.updated,
  }
}

export default connect(mapStateToProps, { addSmurf, loadSmurfs })(CreateSmurfForm);