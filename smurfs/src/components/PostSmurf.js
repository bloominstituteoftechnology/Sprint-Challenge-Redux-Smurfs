import React from 'react';
import { connect } from 'react-redux';
import { postSmurf } from './actions';

class PostSmurf extends React.Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  handleSubmit = () => {
    this.props.postSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height,
    });
  }

  render() {
    return(
      <h1>SMURF LIST</h1>
    )
  }

} 

export default connect (null, { postSmurf })(PostSmurf);