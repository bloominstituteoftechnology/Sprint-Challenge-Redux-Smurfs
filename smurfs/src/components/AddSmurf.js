import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions:

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
    // addSmurf
    // setState
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
          <input type='number' 
            value={this.state.age > 0 ? this.state.age : ''} 
            onChange={this.handleInput} placeholder='Age' 
          />
          <input name='height' value={this.state.height} onChange={this.handleInput} placeholder='Height' />
          <button type='submit'>Add Smurf</button>
        </form>)}
      </div>
    );
  };
};

// Map state
const mapStateToProps = (state) => { 
  return {}
};

// Connect it all together
export default connect( mapStateToProps, {})(AddSmurf);