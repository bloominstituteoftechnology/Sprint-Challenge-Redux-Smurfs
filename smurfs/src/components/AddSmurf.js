import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions:
import { addSmurf } from '../actions';

class AddSmurf extends Component {
  constructor(props) {
    super(props);

    // Define local state to handle text input.
    this.state = {
      name: '',
      age: 0,
      height: ''
    };
  };

  // We will need an input handler to add to local state.
  handleInput = (event) => {
    this.setState( {[event.target.name]: event.target.value} );
  };

  // Handler for submitting the form to add a new smurf.
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addSmurf(this.state);

    // Reset local State to empty values.
    this.setState({
      name: '',
      age: 0,
      height: ''
    });
  };

  /* Display the form:
   * We need to get this info:
   * -- name
   * -- age
   * -- height
   */
  render() {
    return (
      <div classname='smurfForm'>
        {(<form onSubmit={this.handleSubmit}>
          <input name='name' value={this.state.name} onChange={this.handleInput} placeholder='Name' />
          <input name='age' type='number' 
            value={this.state.age > 0 ? this.state.age : null } 
            min='0' max='2000' onChange={this.handleInput} placeholder='Age' 
          />
          <input name='height' value={this.state.height} onChange={this.handleInput} placeholder='Height' />
          <button type='submit'>Add Smurf</button>
        </form>)}
      </div>
    );
  };
};

// Pull in info to pass on as props:
// const initialState = {
//   smurfs: [],
//   fetching: false,
//   adding: false,
//   updating: false,
//   deleting: false,
//   error: null
// };
const mapStateToProps = (state) => { 
  return {
    adding: state.adding
  }
};

// Connect it all together
export default connect( mapStateToProps, { addSmurf })(AddSmurf);